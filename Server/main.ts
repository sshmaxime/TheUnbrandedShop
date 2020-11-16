import { server } from './src/server/server';
import { db } from "./src/db/db"
import config from './src/config';

(async () => {
  try {
    await db.ready
    await server.ready
  } catch (err) {
    return console.log("Error while initializing the application: ", err)
  }

  server.init();
  server.start();
})();

