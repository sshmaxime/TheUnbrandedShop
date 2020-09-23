export type checkoutSession = {
  _id: string,

  stripe: {
    sessionId: string,
    paymentIntentId: string,
  },

  customer: customer,
  shipping: shipping,
  cart: {
    totalPrice: number,
    items: cartItem[]
  }
}

export type cartItem = {
  id: string,

  name: string,
  price: number,
  imgUrl: string,
  description: string,
  quantity: number,
}

export type item = {
  id: string,

  name: string,
  price: number,
  imgUrl: string[],
  description: string,
}

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