const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Finding records', function() {

  let char;

  beforeEach(async function(){
    char = new pokemonChar({
      name: "Pikachu",
      weight: "40"
    });
  
    const result = await char.save()
    assert(result.isNew === false);

  });

  it('Finds a record to the database', async function() {

    const findData = (data) => {
      const result = data.findOne({name: 'Pikachu'})
      return result._conditions.name;
    };

    const result = await findData(pokemonChar);
    assert(result === 'Pikachu');
  });

  it('Finds a record by ID to the database', async function() {

    const findData = (data) => {
      const result = data.findOne({_id: char._id.toString()})
      return result;
    };
    
    const result = await findData(pokemonChar);
    assert(result._id.toString() === char._id.toString());
  });
});