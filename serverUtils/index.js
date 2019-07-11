const app = require("express")();
const stripe = require("stripe")("***REMOVED***");
var cors = require("cors");

app.use(cors());

app.use(require("body-parser").text());

app.post("/test", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));
