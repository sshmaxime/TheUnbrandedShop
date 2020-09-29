import { model } from "./itemModel";
import { type } from "./itemType";

export type item = {
  id: string,
  description: string,
  type: type,

  info: [string, string][],
  models: model[],
}