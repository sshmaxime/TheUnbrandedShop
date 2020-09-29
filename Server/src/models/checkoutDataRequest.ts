import { cartItemRequest } from "./checkoutCartItem";
import { customer } from "./checkoutCustomer";
import { shipping } from "./checkoutShipping";

export type checkoutDataRequest = {
  shipping: shipping,
  customer: customer,
  items: cartItemRequest[]
}