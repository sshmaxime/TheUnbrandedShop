import { customer, shipping } from "../types/info"
import { cartItem, model, size } from "../types/item"

export type checkoutSession = {
  _id: string,

  stripe: {
    sessionId: string,
    paymentIntentId: string,
  },

  checkoutInfo: checkoutInfo
}

export type checkoutInfo = {
  customer: customer,
  shipping: shipping,
  cartItems: cartItem[]
}

export type cartCheckoutItem = {
  id: string,
  model: model,
  size: size,
  quantity: number,

  imgUrl: string,
  price: number,
  description: string,
}

export type checkoutDataRequest = {
  shipping: shipping,
  customer: customer,
  items: cartItem[]
}

export type checkoutData = {
  shipping: shipping,
  customer: customer,
  items: cartCheckoutItem[]
}

