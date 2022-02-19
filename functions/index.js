const functions = require("firebase-functions");
const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors //cross origin resource sharing
const stripe = require("stripe")('sk_test_51KMbTZSBGjHkWRO32kVQ85Tfxs9iH3iZLDlUAyf2ir01Nmr2G6SKTKLSogykv2hcYEshHkCoY4N8RY0BAE2qYliZ00Qaqw4P4R'); // npm i stripe

// API

// - App config //Setting up Express Server
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (request, response)=>response.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
   const total = request.query.total;
   console.log("Total Payment Recieved>>", total);

   const paymentIntent = await stripe.PaymentIntent.create({
       amount : total, // In Paise Value not in Rupees
       currency: "INR",
   });
   
   response.status(201).send({
    clientSecret: paymentIntent.client_secret,
   });

});
// Listen Cammond

exports.api = functions.https.onRequest(app);

// => In Terminal Type (firebase emulators:start) to start emulators

// EndPoint
// http://localhost:5001/clone-f4f6a/us-central1/api
