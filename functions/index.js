const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IXlvoIssDitHYfkOQ7eJpVbAvBU1E1VtZ72aqlAJdBhgmr5Z3vOP97O8VqlpmJ5tC6CUgts0jd36YOf2KWqNZX900eXH7exG5');


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (req, res) => res.status(200).send('hello'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    
    console.log('Payment Request Recieved', total); 

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-d33d0/us-central1/api