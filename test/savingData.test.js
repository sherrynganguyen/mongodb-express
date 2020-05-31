const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Saving records', function() {
  it('Saves a record to the database', async function() {
    let char = new pokemonChar({
      name: "Pikachu",
      weight: "40"
    })

    const saveChar = (char) => {
      char.save()
      return char;
    };
    
    const result = await saveChar(char)
    assert(result.isNew === false);
  });
});