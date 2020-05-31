require('dotenv').config();
const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// const DBUSER = process.env.DBUSER;
// const DBPASSWORD = process.env.DBPASSWORD;
// const url = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0-onasa.mongodb.net/mongodb-express?retryWrites=true&w=majority`;

const LOCALHOST = process.env.LOCALHOST
const url = `${LOCALHOST}/mongodb-express`;

before(async function(){
  try {
    mongoose.connect(url, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true})
    await mongoose.connection.once('open', () => {
      console.log("Connected successfully to database");
    });

  } catch (err) {
    console.log(err)
  }
})

beforeEach(async function(){
  await mongoose.connection.collections.pokemonchars.drop()
})