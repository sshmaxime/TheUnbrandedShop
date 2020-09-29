import { checkoutInfo } from "./checkoutInfo";

export type checkout = {
  _id: string,

  stripe: {
    sessionId: string,
    paymentIntentId: string,
  },

  checkoutInfo: checkoutInfo
}