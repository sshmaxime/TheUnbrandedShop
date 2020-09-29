import * as Stripe from 'stripe';

import { db } from "../../../db/db"
import { checkout } from '../../../models/checkout';
import { checkoutDataRequest } from '../../../models/checkoutDataRequest';
import { strp } from "../../../stripe/stripe";

export const getCheckout = async (checkout_id: string): Promise<checkout> => {
  return await db.getCheckout(checkout_id);
}

export const postCheckout = async (checkoutDataRequest: checkoutDataRequest): Promise<Promise<Stripe.Stripe.Response<Stripe.Stripe.Checkout.Session>>> => {
  const checkoutData = await db.createCheckoutData(checkoutDataRequest);
  const stripeCheckoutSession = await strp.createCheckoutSession(checkoutData);

  const checkout: checkout = {
    _id: stripeCheckoutSession.id,
    stripe: {
      sessionId: stripeCheckoutSession.id,
      paymentIntentId: stripeCheckoutSession.payment_intent.toString(),
    },
    checkoutInfo: {
      customer: checkoutData.customer,
      shipping: checkoutData.shipping,
      cartItems: checkoutData.items
    }
  };
  await db.storeCheckout(checkout);
  return stripeCheckoutSession;
}