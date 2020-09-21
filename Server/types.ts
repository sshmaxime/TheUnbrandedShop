export type checkoutData = {
  items: cartItem[],
  user: user
}

export type cartItem = {
  id: string;
  title: string;
  imgUrl: string;
  size: size;
  price: string;
};

export type user = {
  firstname: string,
  lastname: string,
  email: string,
  country: string,
  city: string,
  postalCode: string,
  address: string,
}

export type size =
  "XS"
  | "S"
  | "M"
  | "L"
  | "XL"