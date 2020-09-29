import * as Stripe from 'stripe';
import config from '../config';
import { checkoutData } from '../models/checkoutData';

class stripe {
  stripe: Stripe.Stripe

  constructor(apiKey: string, version: Stripe.Stripe.LatestApiVersion) {
    this.stripe = new Stripe.Stripe(apiKey, {
      apiVersion: version,
    });
  }

  createCheckoutSession = async (checkoutData: checkoutData) => {
    const line_items: Stripe.Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (let item of checkoutData.items) {

      let amount = 0;
      if (String(item.price).search(".") != -1) {
        amount = Number(String(item.price).replace('.', ''))
      } else {
        amount = Number(String(item.price) + "00")
      }
      const tmp: Stripe.Stripe.Checkout.SessionCreateParams.LineItem = {
        amount: amount, // Adding 00 is needed for Stripe
        currency: "eur",  // Hardcode every price is in euro
        name: item.id,
        images: [item.imgUrl],
        description: item.description,
        quantity: item.quantity
      }
      line_items.push(tmp)
    }
    console.log(line_items)
    return await this.stripe.checkout.sessions.create({
      payment_intent_data: {
        shipping: {
          address: {
            country: checkoutData.shipping.country,
            city: checkoutData.shipping.city,
            postal_code: checkoutData.shipping.postalCode,
            line1: checkoutData.shipping.address,
          },
          name: checkoutData.customer.firstname + " " + checkoutData.customer.lastname,
        }
      },
      customer_email: checkoutData.customer.email,
      payment_method_types: ['card'],
      line_items: line_items,
      success_url: config.BASE_URL + "/checkout/success/{CHECKOUT_SESSION_ID}",
      cancel_url: config.BASE_URL + "/checkout/cancel",
    });
  }
}

export const strp = new stripe(config.STRIPE_API, "2020-08-27");