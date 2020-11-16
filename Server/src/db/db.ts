import * as Nano from "nano"
import config from '../config';
import { checkout } from "../models/checkout";
import { checkoutData } from "../models/checkoutData";
import { checkoutDataRequest } from "../models/checkoutDataRequest";
import { checkoutItem } from "../models/checkoutItem";
import { item } from "../models/item";
import { model } from "../models/itemModel";

class myDb {
  ready: Promise<any>

  // Database Handler
  private dbHandler: Nano.ServerScope

  // Database Documents
  private dbDoc_items: Nano.DocumentScope<item>
  private dbDoc_checkouts: Nano.DocumentScope<checkout>

  // RealTime Listeners
  private dbDoc_items_listener: Nano.FollowEmitter
  private dbDoc_checkouts_listeners: Nano.FollowEmitter

  constructor(dbUrl: string, username: string, password: string) {
    // Init databse handler
    this.dbHandler = Nano({ url: dbUrl, requestDefaults: { jar: true } });

    // Check if the database is properly set up
    this.ready = new Promise(async (resolve, reject) => {
      // Checks to do in order to check that the database is properly configured.
      try {
        await this.dbHandler.auth(username, password);

        this.dbDoc_items = this.dbHandler.db.use<item>("items")
        this.dbDoc_items_listener = this.dbDoc_items.follow({ since: "now", include_docs: true })
        this.dbDoc_items_listener.follow();

        this.dbDoc_checkouts = this.dbHandler.db.use<checkout>("checkouts")
        this.dbDoc_checkouts_listeners = this.dbDoc_checkouts.follow({ since: "now", include_docs: true })
        this.dbDoc_checkouts_listeners.follow();

        // Add checks ...
        return resolve();
      } catch (err) {
        // Checks failed
        return reject(err);
      }
    })
  }

  ///////////////
  ///// Init ////
  ///////////////

  initDatabse = async () => {
    // Do it otherwise CouchDb will complain
    await this.dbHandler.db.create("_users");

    await this.dbHandler.db.create("items");
    await this.dbHandler.db.create("checkouts");
  }

  ///////////////
  // Checkouts //
  ///////////////

  storeCheckout = async (checkoutSession: checkout) => {
    return await this.dbDoc_checkouts.insert(checkoutSession);
  }
  getCheckout = async (checkoutSessionId: string) => {
    return await this.dbDoc_checkouts.get(checkoutSessionId);
  }

  getAllCheckouts = async (): Promise<checkout[]> => {
    return new Promise<checkout[]>(async (resolve) => {
      const checkouts: checkout[] = [];
      const listDocuments = await this.dbDoc_checkouts.list({ include_docs: true });
      listDocuments.rows.forEach((row) => {
        // Remove db informations
        delete row.doc._id;
        delete row.doc._rev;
        checkouts.push(row.doc as checkout);
      });
      resolve(checkouts);
    })
  }

  ///////////////
  //// Items ////
  ///////////////

  storeItem = async (item: item) => {
    return await this.dbDoc_items.insert(item);
  }

  getItem = async (itemId: string): Promise<item> => {
    return await this.dbDoc_items.get(itemId);
  }

  getAllItems = async (): Promise<item[]> => {
    return new Promise<item[]>(async (resolve) => {
      const items: item[] = [];
      const listDocuments = await this.dbDoc_items.list({ include_docs: true });
      listDocuments.rows.forEach((row) => {
        // Remove db informations
        delete row.doc._id;
        delete row.doc._rev;
        items.push(row.doc as item);
      });
      resolve(items);
    })
  }

  /////////////////
  // Subscribers //
  /////////////////

  subscribeChangesItems = async (callback: (item: item) => any) => {
    this.dbDoc_items_listener.on("change", (change) => {
      // remove database properties
      delete change.doc._id
      delete change.doc._rev
      const item = change.doc as item
      callback(item);
    })
  }

  subscribeChangesCheckouts = async (callback: (checkout: checkout) => any) => {
    this.dbDoc_checkouts_listeners.on("change", (change) => {
      // remove database properties
      delete change.doc._id
      delete change.doc._rev
      const checkout = change.doc as checkout
      callback(checkout);
    })
  }

  ///////////////
  ///////////////
  ///////////////

  createCheckoutData = async (checkoutDataRequest: checkoutDataRequest): Promise<checkoutData> => {
    console.log(checkoutDataRequest);

    return new Promise<checkoutData>(async (resolve, reject) => {
      const items: checkoutItem[] = [];
      for (let item of checkoutDataRequest.items) {
        let invalid = false;

        const dbitem = await this.dbDoc_items.get(item.id);

        dbitem.models.forEach((model: model) => {

          if (item.model.name == model.name) {
            Object.keys(model.sizes).forEach((size: string) => {
              if (model.sizes[size] < item.size[size] * item.quantity) {
                reject("error in the cart")
              }
            })

            if (!invalid) {
              const tmpItem: checkoutItem = {
                id: item.id,
                quantity: item.quantity,

                description: dbitem.description,

                price: model.price,
                imgUrl: model.imgUrl[0],
                model: model,
                size: item.size
              }
              items.push(tmpItem);
            }
          }
        })
      }

      const checkoutData: checkoutData = {
        customer: checkoutDataRequest.customer,
        shipping: checkoutDataRequest.shipping,
        items: items
      }
      console.log(checkoutData)
      resolve(checkoutData);
    })
  }
}



export const db = new myDb(config.DB_URL, "admin", "admin");