import * as Stripe from 'stripe';

export type sessionInfo = {
  session: Stripe.Stripe.Checkout.Session;
  paymentIntent: Stripe.Stripe.Response<Stripe.Stripe.PaymentIntent>
}



