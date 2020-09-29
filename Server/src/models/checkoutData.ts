import { customer } from "./checkoutCustomer";
import { checkoutFinalItem } from "./checkoutFinalItem";
import { shipping } from "./checkoutShipping";

export type checkoutData = {
  shipping: shipping,
  customer: customer,
  items: checkoutFinalItem[]
}

