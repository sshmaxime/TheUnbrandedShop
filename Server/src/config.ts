import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + '/.env' });

export default {
  STRIPE_API: process.env.PROD ? process.env.STRIPE_API_PROD : process.env.STRIPE_API_DEV,
  BASE_URL: process.env.PROD ? process.env.BASE_URL_PROD : process.env.BASE_URL_DEV,
}