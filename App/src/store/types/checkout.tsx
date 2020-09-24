import { customer, shipping } from "./info";
import { cartItem } from "./items";

export type checkoutInfo = {
  customer: customer,
  shipping: shipping,
  cartItems: cartItem[]
}