import { model } from "./itemModel";
import { size } from "./itemSize";

export type checkoutItem = {
  id: string,
  model: model,
  size: size,
  quantity: number,

  imgUrl: string,
  price: number,
  description: string,
}