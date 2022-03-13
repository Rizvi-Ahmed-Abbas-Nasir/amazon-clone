
// => In Terminal Type (firebase emulators:start) to start emulators

// EndPoint
// http://localhost:5001/clone-f4f6a/us-central1/api

// Index.js
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors"); 
const stripe = require("stripe")("sk_test_51KMbTZSBGjHkWRO32kVQ85Tfxs9iH3iZLDlUAyf2ir01Nmr2G6SKTKLSogykv2hcYEshHkCoY4N8RY0BAE2qYliZ00Qaqw4P4R");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world!!!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);