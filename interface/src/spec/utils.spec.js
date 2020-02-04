const { expect } = require("chai");
const { donutManipulator, lineManipulator } = require("../utils/dataUtils");

describe("donutManipulator", () => {
  const testArray = [
    [10, 5, 2, 5, 5, 8, 5],
    [0, 5, 0, 5, 25, 5, 5],
    [5, 5, 3, 5, 5, 7, 19],
    [5, 2, 5, 16, 0, 5, 5]
  ];
  it("when passed an empty array it returns an array of zeros", () => {
    expect(donutManipulator([])).to.eql([0, 0, 0, 0, 0, 0, 0]);
  });

  it("returns a single array when passed an array of arrays", () => {
    donutManipulator(testArray).forEach(item => {
      console.log(item);
      expect(item).to.be.a("number");
    });
  });

  it("averages each index from the input array in the returned array", () => {
    expect(donutManipulator(testArray)).to.eql([
      5,
      4.25,
      2.5,
      7.75,
      8.75,
      6.25,
      8.5
    ]);
  });
});

describe.only('lineManipulator', () => {
  it('takes an array and returns an object', () => {
    expect(lineManipulator([])).to.be.an('object')
  });

  it('returns an object with seven keys for the corresponding emotions', () => {
    expect(lineManipulator([])).to.have.all.keys(
      'neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'
    )
  });
});