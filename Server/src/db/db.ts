import * as Nano from "nano"
import { checkoutSession, item } from "./types";

export class database {
  ready: Promise<any>

  db: Nano.ServerScope

  itemDocument: Nano.DocumentScope<item>
  checkoutSessionDocument: Nano.DocumentScope<checkoutSession>



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
    return this.checkoutSessionDocument.insert(checkoutSession);
  }

  retrieveCheckoutSession = async (checkoutSessionId: string) => {
    return this.checkoutSessionDocument.get(checkoutSessionId);
  }
}