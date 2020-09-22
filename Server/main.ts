import * as Stripe from 'stripe';
import * as express from 'express';
import * as dotenv from "dotenv";

import { cartItem, checkoutData } from './src/types/types';

dotenv.config({ path: __dirname + '/.env' });

(async () => {
  const stripe = new Stripe.Stripe(process.env.STRIPE_API_DEV, {
    apiVersion: '2020-08-27',
  });
  const url = process.env.BASE_URL_DEV

  const app = express();
  app.use(express.json())

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", '*'); // TODO
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

    next();
  })

  app.get('/session/:session_id', (req, res) => {
    (async () => {
      const session_id = req.params.session_id

      if (!session_id) {
        return res.status(400)
      }
      const session = await stripe.checkout.sessions.retrieve(session_id, { expand: ["line_items", "shipping"] })
      const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent.toString())
      const c = await stripe.paymentIntents.retrieve(session.payment_intent.toString())
      console.log(paymentIntent)
      return res.send(JSON.stringify({
        customerName: paymentIntent.shipping.name,

        shippingInfo: {
          postalColde: paymentIntent.shipping.address.postal_code,
          country: paymentIntent.shipping.address.country,
          city: paymentIntent.shipping.address.city,
          address: paymentIntent.shipping.address.line1,
        },
        items: session.line_items.data
      }))
    })()
  })

  app.post('/', (req, res) => {
    (async () => {
      const checkoutData = req.body as checkoutData
      console.log(checkoutData)

      let checkoutLineItem: Stripe.Stripe.Checkout.SessionCreateParams.LineItem[] = []

      for (let item of checkoutData.items) {
        const tmpCheckoutLineItem: Stripe.Stripe.Checkout.SessionCreateParams.LineItem = {
          amount: Number(item.price + "00"),
          currency: "eur",
          name: item.title,
          images: [item.imgUrl],
          description: "un truc",
          quantity: 1
        }
        checkoutLineItem.push(tmpCheckoutLineItem)
      }
      const session = await stripe.checkout.sessions.create({
        payment_intent_data: {
          shipping: {
            address: {
              line1: checkoutData.user.address,
              city: checkoutData.user.city,
              country: checkoutData.user.country,
              postal_code: checkoutData.user.postalCode
            },
            name: checkoutData.user.firstname + " " + checkoutData.user.lastname,
          }
        },
        customer_email: checkoutData.user.email,
        payment_method_types: ['card'],
        line_items: checkoutLineItem,
        success_url: url + "/checkout/success/{CHECKOUT_SESSION_ID}",
        cancel_url: url + "/checkout/cancel",
      });
      res.send(session)
    })();
  })

  app.listen(8000, function () {
    console.log("starting server")
  });
})();

