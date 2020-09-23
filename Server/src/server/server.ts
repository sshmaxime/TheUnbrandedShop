import * as express from 'express';
import { database } from '../db/db';
import { stripe } from '../stripe/stripe';

export class server {
  db: database;
  stripe: stripe;

  app: express.Express;

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


      })();
    })
  }
}