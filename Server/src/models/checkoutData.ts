import { customer } from "./checkoutCustomer";
import { checkoutItem } from "./checkoutItem";
import { shipping } from "./checkoutShipping";

export type checkoutData = {
  shipping: shipping,
  customer: customer,
  items: checkoutItem[]
}