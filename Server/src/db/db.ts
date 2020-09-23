import * as Nano from "nano"
import { cartCheckoutItem, cartItem, checkoutData, checkoutDataRequest, checkoutSession, item } from "./types";

export class database {
  ready: Promise<any>

  private db: Nano.ServerScope

  private itemDocument: Nano.DocumentScope<item>
  private checkoutSessionDocument: Nano.DocumentScope<checkoutSession>



  constructor(url: string, port: number, username: string, password: string, create: boolean) {
    this.db = Nano({ url: "http://" + url + ":" + port, requestDefaults: { jar: true } });

    this.ready = new Promise(async (resolve, reject) => {
      const auth = await this.db.auth(username, password);
      if (!auth.ok) {
        return reject();
      }

      // Init the db
      this.itemDocument = this.db.db.use<item>("items")
      this.checkoutSessionDocument = this.db.db.use<checkoutSession>("checkout_sessions")

      return resolve();
    })
  }

  storeCheckoutSession = async (checkoutSession: checkoutSession) => {
    return await this.checkoutSessionDocument.insert(checkoutSession);
  }

  retrieveCheckoutSession = async (checkoutSessionId: string) => {
    return await this.checkoutSessionDocument.get(checkoutSessionId);
  }

  createCheckoutData = async (checkoutDataRequest: checkoutDataRequest): Promise<checkoutData> => {
    return new Promise<checkoutData>(async (resolve, reject) => {
      const items: cartCheckoutItem[] = []
      for (let item of checkoutDataRequest.items) {
        const resp = await this.itemDocument.get(item.id);

        const model = resp.models.get(item.model);

        const tmpItem: cartCheckoutItem = {
          id: item.id,
          quantity: item.quantity,

          name: resp.name,
          description: resp.description,

          price: model.price,
          imgUrl: model.imgUrl[0],
          model: model.name,
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