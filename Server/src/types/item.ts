export type cartItem = {
  id: string,
  model: model,

  size: size,
  quantity: number,
}

// ITEM //
export type item = {
  id: string,
  description: string,
  type: type,

  info: [string, string][],
  models: model[],
}
export type model = {
  name: string,

  price: number,
  imgUrl: string[],
  sizes: size
}
export type size = {
  "XXS"?: number,
  "XS"?: number,
  "S"?: number,
  "M"?: number,
  "L"?: number,
  "XL"?: number,
  "XXL"?: number,
}
export type type =
  "ACCESSORIES"
  | "SHIRTS"
  | "TEE-SHIRTS"
  | "HOODIES"
  | "JEANS"
  | "PARKAS"