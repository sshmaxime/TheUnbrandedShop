export class item {
  id: string;
  title: string;
  imgUrl: string[];
  type: type;
  size: Map<size, number>;
  info: Map<string, string>;
  price: string;

  constructor(
    id: string,
    title: string,
    imgUrl: string[],
    type: type,
    size: Map<size, number>,
    info: Map<string, string>,
    price: string) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.type = type;
    this.size = size;
    this.info = info;
    this.price = price;
  }

  getNbItemForSize(size: size): number {
    const nb = this.size.get(size)
    if (nb === undefined) {
      return 0;
    }
    return nb
  };
}

export type cartItem = {
  id: string;
  title: string;
  imgUrl: string;
  size: size;
  price: string;
};

export type size =
  "XS"
  | "S"
  | "M"
  | "L"
  | "XL"


export type type =
  "ACCESSORIES"
  | "SHIRTS"
  | "TEE-SHIRTS"
  | "HOODIES"
  | "JEANS"
  | "PARKAS"