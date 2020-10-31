export type cartItem = {
  id: string,
  model: model,

  size: sizeType,
  quantity: number,
}

// ITEM //
export type item = {
  id: string,
  description: string,
  type: type,

  info: [string, string][],
  models: model[],
  exclusive: boolean,
}
export type model = {
  name: string,

  price: number,
  imgUrl: string[],
  sizes: size
}

export type sizeType =
  | "XXS"
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "XXL"

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