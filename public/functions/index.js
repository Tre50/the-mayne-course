const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app =express();
app.use(cors());

app.get('/test' , (req, res) => {

res.send('this will work');

});

exports.app = functions.https.onRequest(app)