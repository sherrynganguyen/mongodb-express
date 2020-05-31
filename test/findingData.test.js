const mocha = require('mocha');
const assert = require('assert');

const pokemonChar = require('../models/pokemonChar');


describe('Finding records', function() {

  beforeEach(async function(){
    let char = new pokemonChar({
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

});