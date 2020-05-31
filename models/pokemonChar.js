const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonCharSchema = new Schema({
  name: String,
  weight: Number
})

const PokemonChar = mongoose.model('pokemonchar', PokemonCharSchema);

module.exports = PokemonChar;