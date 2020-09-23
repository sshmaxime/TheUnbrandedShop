export type checkoutSession = {
  _id: string,

  stripe: {
    sessionId: string,
    paymentIntentId: string,
  },

  customer: customer,
  shipping: shipping,
  cartItems: cartItem[]
}

export type cartItem = {
  id: string,
  model: string,

  size: size,
  quantity: number,
}

export type cartCheckoutItem = {
  id: string,
  model: string,
  size: size,
  quantity: number,

  name: string,
  imgUrl: string,
  price: number,
  description: string,
}

export type item = {
  id: string,

  name: string,
  description: string,

  models: Map<string, model>
}

export type model = {
  name: string,

  price: number,
  imgUrl: string[],
  sizes: sizes
}

export type sizes = Map<size, number> // number of items by size

export type shipping = {
  country: string,
  city: string,
  address: string,
  postalCode: string,
}

export type customer = {
  firstname: string,
  lastname: string,
  email: string
}

export type checkoutDataRequest = {
  shipping: shipping,
  customer: customer,
  items: cartItem[]
}

export type checkoutData = {
  shipping: shipping,
  customer: customer,
  items: cartCheckoutItem[]
}

export type size = "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
