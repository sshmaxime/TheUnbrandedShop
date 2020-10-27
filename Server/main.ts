import { server } from './src/server/server';
import { db } from "./src/db/db"
import config from './src/config';

(async () => {
  try {
    await db.ready
  } catch (err) {
    return console.log("Error while initializing the application: ", err)
  }

  const serv = new server();

  serv.init();
  serv.start(config.PORT);
})();

