import * as Stripe from 'stripe';
import config from '../config';
import { checkoutData } from '../types/checkout';
import { sessionInfo } from './types';

export class stripe {
  stripe: Stripe.Stripe

  constructor(apiKey: string, version: Stripe.Stripe.LatestApiVersion) {
    this.stripe = new Stripe.Stripe(apiKey, {
      apiVersion: version,
    });
  }

  retrieveSessionInfo = async (sessionId: string): Promise<sessionInfo> => {
    const session = await this.stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
    const paymentIntent = await this.stripe.paymentIntents.retrieve(session.payment_intent.toString());

    return new Promise<sessionInfo>((resolve, reject) => {
      return resolve({
        session: session,
        paymentIntent: paymentIntent
      });
    })
  }

  createCheckoutSession = async (checkoutData: checkoutData) => {
    const line_items: Stripe.Stripe.Checkout.SessionCreateParams.LineItem[] = []

    for (let item of checkoutData.items) {
      const tmp: Stripe.Stripe.Checkout.SessionCreateParams.LineItem = {
        amount: Number(item.price + "00"), // Adding 00 is needed for Stripe
        currency: "eur",  // Hardcode every price is in euro
        name: item.id,
        images: [item.imgUrl],
        description: item.description,
        quantity: item.quantity
      }
      line_items.push(tmp)
    }

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