import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + '/../.env' });

export default {
  PORT: parseInt(process.env.PORT),
  STRIPE_API: process.env.PROD ? process.env.STRIPE_API_PROD : process.env.STRIPE_API_DEV,
  APP_URL: process.env.PROD ? process.env.APP_URL_PROD : process.env.APP_URL_DEV,
  DB_URL: process.env.PROD ? process.env.DB_URL_PROD : process.env.DB_URL_DEV,
}