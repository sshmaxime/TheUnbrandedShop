import * as Nano from "nano"
import { TSMap } from "typescript-map"
import { item } from "../types/item";
import { cartCheckoutItem, checkoutData, checkoutDataRequest, checkoutSession } from "./../types/checkout";

export class database {
  ready: Promise<any>

  private db: Nano.ServerScope

  private itemDocument: Nano.DocumentScope<item>
  private checkoutSessionDocument: Nano.DocumentScope<checkoutSession>


  constructor(url: string, username: string, password: string, create: boolean) {
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

            this.db.db.use<item>("items").insert({
              _id: "Wallah",

              id: "Wallah",
              description: "Hello",
              type: "ACCESSORIES",
              info: [["Material", "100% Cotton"]],
              models: [
                {
                  name: "black",
                  price: 19.99,
                  imgUrl: ["https://ae01.alicdn.com/kf/H2c7811541fc049248233860aa96dfb58G/Japon-Anime-Prison-cole-yeux-triste-impression-Panama-seau-chapeaux-mode-adulte-cr-me-solaire-p.jpg_640x640.jpg"],
                  sizes: {
                    "L": 1
                  }
                },
                {
                  name: "yellow",
                  price: 19.99,
                  imgUrl: ["https://ae01.alicdn.com/kf/H2a6069f97e7f4301bbf75941bb99d4dfy/Japon-Anime-Prison-cole-yeux-triste-impression-Panama-seau-chapeaux-mode-adulte-cr-me-solaire-p.jpg_640x640.jpg"],
                  sizes: {
                    "M": 1
                  }
                }

              ]
            });
          } catch (err) { reject(err); }
        }

        // Init db endpoints
        this.itemDocument = this.db.db.use<item>("items")
        this.checkoutSessionDocument = this.db.db.use<checkoutSession>("checkout_sessions")

        return resolve();
      } catch (err) { return reject(err); }
    })
  }

  storeCheckoutSession = async (checkoutSession: checkoutSession) => {
    return await this.checkoutSessionDocument.insert(checkoutSession);
  }

  retrieveCheckoutSession = async (checkoutSessionId: string) => {
    return await this.checkoutSessionDocument.get(checkoutSessionId);
  }

  getAllItems = async (): Promise<item[]> => {
    const items: item[] = [];
    const listItemAsDocuments = await this.itemDocument.list();

    for (let row of listItemAsDocuments.rows) {
      let tmpItem = await this.itemDocument.get(row.id);
      items.push(tmpItem);
    }
    return new Promise<item[]>((resolve, reject) => {
      resolve(items);
    })
  }

  getItem = async (id: string): Promise<item> => {
    const item = await this.itemDocument.get(id);

    return new Promise<item>((resolve, reject) => {
      resolve(item);
    })
  }

  createCheckoutData = async (checkoutDataRequest: checkoutDataRequest): Promise<checkoutData> => {
    return new Promise<checkoutData>(async (resolve, reject) => {
      const items: cartCheckoutItem[] = []
      for (let item of checkoutDataRequest.items) {
        const resp = await this.itemDocument.get(item.id);

        const model = resp.models[item.model.name];

        const tmpItem: cartCheckoutItem = {
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

      const checkoutData: checkoutData = {
        customer: checkoutDataRequest.customer,
        shipping: checkoutDataRequest.shipping,
        items: items
      }

      return resolve(checkoutData);
    })
  }
}