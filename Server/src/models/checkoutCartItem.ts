import { model } from "./itemModel";
import { size } from "./itemSize";

export type cartItemRequest = {
  id: string,
  model: model,

  size: size,
  quantity: number,
}
