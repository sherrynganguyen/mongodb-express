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
  
    const saveChar = (char) => {
      char.save()
      return char;
    };
    
    const result = await saveChar(char);
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
      const result = data.findOne({_id: char._id})
      return result._conditions._id;
    };
    
    const result = await findData(pokemonChar);
    assert(result === char._id);
  });
});