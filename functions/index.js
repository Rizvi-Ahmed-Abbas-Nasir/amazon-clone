const functions = require("firebase-functions");

const express = require("express"); // npm i express (install)

const cors = require("cors"); // npm i cors (install)
const { response, request } = require("express");

const stripe = require("stripe")("sk_test_51KMbTZSBGjHkWRO32kVQ85Tfxs9iH3iZLDlUAyf2ir01Nmr2G6SKTKLSogykv2hcYEshHkCoY4N8RY0BAE2qYliZ00Qaqw4P4R"); //npm i stripe (Install) 

// API

// App Config setting up express server
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get('/',(request, response)=>response.status(200).send("hello world"))

app.get('/Abbas',(request, response)=>response.status(200).send("Rizvi Ahmed"))

app.post('/payments/create', async(request, response) =>{
    const total = request.query.total;
    console.log("Total Payment Received>>",total);

    const paymentIntent = await stripe.PaymentIntent.create({
        amount: total, // paise Value not in Rupess
        currency: "inr",
    })
})

// Listen Cammond

exports.api = functions.https.onRequest(app);

// => In Terminal Type (firebase emulators: start) to start emulators

// EndPoint
// http://localhost:5001/clone-f4f6a/us-central1/api
