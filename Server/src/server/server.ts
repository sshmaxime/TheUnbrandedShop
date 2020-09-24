import * as express from 'express';
import { database } from '../db/db';
import { stripe } from '../stripe/stripe';
import { checkoutSession, checkoutDataRequest } from './../types/checkout';

export class server {
  private db: database;
  private stripe: stripe;

  private app: express.Express;

  constructor(db: database, stripe: stripe) {
    this.db = db;
    this.stripe = stripe;

    this.app = express();
  }

  init = () => {
    this.app.use(express.json());

    this.app.use(function (_, res, next) {
      res.setHeader("Access-Control-Allow-Origin", '*');
      res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');
      next();
    });

    this.initRoutes()
  }

  private initRoutes = () => {

    this.app.get("/session/:session_id", (req, res) => {
      (async () => {
        const session_id = req.params.session_id;

        if (!session_id) {
          return res.status(400);
        }

        try {
          const checkoutSession = await this.db.retrieveCheckoutSession(session_id);
          res.send(checkoutSession.checkoutInfo);
        } catch (err) {
          console.log(err);
        }
      })();
    })

    this.app.post('/session', ({ body }, res) => {
      (async () => {
        const checkoutDataRequest = body as checkoutDataRequest;

        try {
          const checkoutData = await this.db.createCheckoutData(checkoutDataRequest);

          const stripeCheckoutSession = await this.stripe.createCheckoutSession(checkoutData);

          const dbCheckoutSession: checkoutSession = {
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

          await this.db.storeCheckoutSession(dbCheckoutSession);
          res.send(stripeCheckoutSession);
        } catch (err) {
          console.log(err);
          res.status(500);
        }
      })();
    })

    this.app.get('/items', ({ body }, res) => {
      (async () => {

        res.send(await this.db.getAllItems())
      })();
    })

    this.app.get('/item/:id', (req, res) => {
      (async () => {
        res.send(await this.db.getItem(req.params.id))
      })();
    })
  }

  start = (port: number) => {
    this.app.listen(port, () => {
      console.log("starting server")
    });
  }
}