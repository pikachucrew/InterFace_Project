const {expect} = require( "chai");
const donutManipulator = require ("../utils/dataUtils")


describe("donutManipulator", () => {

  it('when passed an empty array it returns an empty array', () => {expect(donutManipulator([])).to.eql([])
    
  });
});