const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Saving records', function() {
  it('Saves a record to the database', async function() {
    let char = new pokemonChar({
      name: "Pikachu",
      weight: 40
    });
    
    const result = await char.save()
    assert(result.isNew === false);
  });
});