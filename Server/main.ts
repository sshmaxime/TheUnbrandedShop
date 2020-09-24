import config from './src/config';

import { database } from "./src/db/db"
import { stripe } from "./src/stripe/stripe"
import { server } from './src/server/server';

(async () => {

  const strp = new stripe(config.STRIPE_API, "2020-08-27");
  const db = new database(config.DB_URL, "admin", "admin", true);

  try {
    await db.ready
  } catch (err) {
    return console.log("Error while initializing database: ", err)
  }
  //

  const serv = new server(db, strp);

  serv.init();
  serv.start(8000);
})();

