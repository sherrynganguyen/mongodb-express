const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Deleting records', function() {

  let char;

  beforeEach(async function(){
    char = new pokemonChar({
      name: "Eevee",
      weight: "40"
    });
  
    const result = await char.save()
    assert(result.isNew === false);

  });

  it('Delete a record by ID to the database', async function() {
    const recordToDelete = await pokemonChar.findOneAndRemove({name: "Eevee"});
    const fountRecord = await pokemonChar.findOne({name: "Eevee"});
    assert(fountRecord === null);
  })

});