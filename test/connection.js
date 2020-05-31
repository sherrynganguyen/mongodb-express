const mongoose = require('mongoose');


const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;

const url = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0-onasa.mongodb.net/mongodb-express?retryWrites=true&w=majority`;
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  (!err) ? console.log("Connected successfully to database") : console.log('Error connecting to database');
});