import * as Nano from "nano"
import config from '../config';
import { checkout } from "../models/checkout";
import { checkoutData } from "../models/checkoutData";
import { checkoutDataRequest } from "../models/checkoutDataRequest";
import { checkoutItem } from "../models/checkoutItem";
import { item } from "../models/item";
import { model } from "../models/itemModel";

class database {
  ready: Promise<any>

  private db: Nano.ServerScope

  private itemDocument: Nano.DocumentScope<item>
  private checkoutSessionDocument: Nano.DocumentScope<checkout>

  constructor(url: string, username: string, password: string, create: boolean) {
    console.log(url)
    this.db = Nano({ url: url, requestDefaults: { jar: true } });

    this.ready = new Promise(async (resolve, reject) => {
      try {
        await this.db.auth(username, password);

        if (create) {
          try {
            try { await this.db.db.destroy("_users"); } catch { }
            try { await this.db.db.destroy("items"); } catch { }
            try { await this.db.db.destroy("checkout_sessions"); } catch { }

            await this.db.db.create("_users");
            await this.db.db.create("items");
            await this.db.db.create("checkout_sessions");

            await this.db.db.use<item>("items").insert(
              {
                _id: "eyes",

                id: "eyes",
                description: "eyes",
                type: "ACCESSORIES",
                info: [["Material", "100% Cotton"]],
                models: [
                  {
                    name: "Black",
                    price: 99.99,
                    imgUrl: ["https://ae01.alicdn.com/kf/H2c7811541fc049248233860aa96dfb58G/Japon-Anime-Prison-cole-yeux-triste-impression-Panama-seau-chapeaux-mode-adulte-cr-me-solaire-p.jpg_640x640.jpg"],
                    sizes: {
                      "L": 1
                    }
                  },
                  {
                    name: "Yello",
                    price: 99.99,
                    imgUrl: ["https://ae01.alicdn.com/kf/H2a6069f97e7f4301bbf75941bb99d4dfy/Japon-Anime-Prison-cole-yeux-triste-impression-Panama-seau-chapeaux-mode-adulte-cr-me-solaire-p.jpg_640x640.jpg"],
                    sizes: {
                      "M": 0
                    }
                  }
                ]
              },
            );
          } catch (err) { reject(err); }
        }

        // Init db endpoints
        this.itemDocument = this.db.db.use<item>("items");
        this.checkoutSessionDocument = this.db.db.use<checkout>("checkout_sessions");

        return resolve();
      } catch (err) { return reject(err); }
    })
  }

  subscribeChangesItems = async (callback: (item: item) => any) => {
    const listener = this.itemDocument.follow({ since: "now", include_docs: true })
    listener.on("change", (change) => {
      // remove not proper item info
      delete change.doc._id
      delete change.doc._rev
      const item = change.doc as item
      callback(item);
    })
    listener.follow();
  }

  storeCheckout = async (checkoutSession: checkout) => {
    return await this.checkoutSessionDocument.insert(checkoutSession);
  }
  getCheckout = async (checkoutSessionId: string) => {
    return await this.checkoutSessionDocument.get(checkoutSessionId);
  }

  getItems = async (): Promise<item[]> => {
    return new Promise<item[]>(async (resolve) => {
      const items: item[] = [];
      const listDocuments = await this.itemDocument.list({ include_docs: true });
      listDocuments.rows.forEach((row) => {
        delete row.doc._id;
        delete row.doc._rev;
        const item = row.doc as item;
        items.push(item);
      });
      resolve(items);
    })
  }

  createCheckoutData = async (checkoutDataRequest: checkoutDataRequest): Promise<checkoutData> => {
    console.log(checkoutDataRequest);

    return new Promise<checkoutData>(async (resolve, reject) => {
      const items: checkoutItem[] = [];
      for (let item of checkoutDataRequest.items) {
        const resp = await this.itemDocument.get(item.id);

        resp.models.forEach((model: model) => {
          if (item.model.name == model.name) {
            const tmpItem: checkoutItem = {
              id: item.id,
              quantity: item.quantity,

              description: resp.description,

              price: model.price,
              imgUrl: model.imgUrl[0],
              model: model,
              size: item.size
            }
            items.push(tmpItem);
          }
        })
      }

      const checkoutData: checkoutData = {
        customer: checkoutDataRequest.customer,
        shipping: checkoutDataRequest.shipping,
        items: items
      }
      console.log(checkoutData)
      return resolve(checkoutData);
    })
  }
}

export const db = new database(config.DB_URL, "admin", "admin", true);