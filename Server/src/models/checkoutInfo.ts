import { cartItemRequest } from "./checkoutCartItem";
import { customer } from "./checkoutCustomer";
import { shipping } from "./checkoutShipping";

export type checkoutInfo = {
  customer: customer,
  shipping: shipping,
  cartItems: cartItemRequest[]
}
