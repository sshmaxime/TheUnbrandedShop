import * as Stripe from 'stripe';
import * as express from 'express';
import { database } from "./src/db/db"
import { stripe } from "./src/stripe/stripe"

import { cartItem, checkoutData } from './src/db/types';
import config from './src/config';
import { server } from './src/server/server';


(async () => {

  const db = new database("localhost", 5984, "admin", "admin", false);
  //
  const strp = new stripe(config.STRIPE_API, "2020-08-27");

  const serv = new server(db, strp);

  serv.init();
  serv.start(8000);
})();

