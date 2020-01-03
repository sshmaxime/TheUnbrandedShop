require('dotenv').config()

const express = require('express')
const app = express()

const stripe = require('stripe')(process.env.STRIPE_API_KEY);

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept');

    next();
})

app.get('/', function (req, res) {
    (async () => {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                name: 'T-shirt',
                description: 'Comfortable cotton t-shirt',
                images: ['https://example.com/t-shirt.png'],
                amount: 500,
                currency: 'eur',
                quantity: 1,
            }],
            success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'https://example.com/cancel',
        });
        res.send(session)
    })();
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})