require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const url = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0-onasa.mongodb.net/mongodb-express?retryWrites=true&w=majority`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  (!err) ? console.log("Connected successfully to database") : console.log('Error connecting to database');
})
app.use('/', () => {
  console.log('Learning MongDB')
});

app.listen('8080', () => {
  console.log('Server is listening in PORT 8080');
})