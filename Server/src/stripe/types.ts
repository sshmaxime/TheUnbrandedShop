import * as Stripe from 'stripe';
import { cartItem, customer, shipping } from '../db/types';

export type sessionInfo = {
  session: Stripe.Stripe.Checkout.Session;
  paymentIntent: Stripe.Stripe.Response<Stripe.Stripe.PaymentIntent>
}



