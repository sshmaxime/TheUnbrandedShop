export default {
  STRIPE_API_KEY: process.env.REACT_APP_PROD ? process.env.REACT_APP_STRIPE_API_KEY_PROD : process.env.REACT_APP_STRIPE_API_KEY_DEV,
  SERVER_URL: process.env.REACT_APP_PROD ? process.env.REACT_APP_SERVER_URL_PROD : process.env.REACT_APP_SERVER_URL_DEV,
}