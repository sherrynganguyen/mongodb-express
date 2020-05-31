const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Updating records', function() {

  let char;

  beforeEach(async function(){
    char = new pokemonChar({
      name: "Eevee",
      weight: "40"
    });
  
    const result = await char.save()
    assert(result.isNew === false);

  });

  it('Update a record by name to the database', async function() {
    const recordToUpdate = await pokemonChar.findOneAndUpdate({name: "Eevee"},{name: "Snorlax"});
    const fountRecord = await pokemonChar.findOne({name: "Snorlax"});
    assert(fountRecord.name === "Snorlax");
  })

});