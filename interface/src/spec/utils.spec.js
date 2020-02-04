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
const testArray = [
  [10, 5, 2, 5, 5, 8, 5],
  [0, 5, 0, 5, 25, 5, 5],
  [5, 5, 3, 5, 5, 7, 19],
  [5, 2, 5, 16, 0, 5, 5],
  [10, 5, 2, 5, 5, 8, 5],
  [0, 5, 0, 5, 25, 5, 5],
  [5, 5, 3, 5, 5, 7, 19]
];

  it('takes an array and returns an object', () => {
    expect(lineManipulator([])).to.be.an('object')
  });

  it('returns an object with seven keys for the corresponding emotions', () => {
    expect(lineManipulator([])).to.have.all.keys(
      'neutral', 'happy', 'sad', 'angry', 'fearful', 'disgusted', 'surprised'
    )
  });

  it('returns an object with arrays populated with zeros when passed an empty array', () => {
    expect(lineManipulator([])).to.eql({
      neutral: [0, 0, 0, 0, 0, 0, 0],
      happy: [0, 0, 0, 0, 0, 0, 0],
      sad: [0, 0, 0, 0, 0, 0, 0],
      angry: [0, 0, 0, 0, 0, 0, 0],
      fearful: [0, 0, 0, 0, 0, 0, 0],
      disgusted: [0, 0, 0, 0, 0, 0, 0],
      surprised: [0, 0, 0, 0, 0, 0, 0]
    });
  });

it("returns an object with each array's values corresponding to a particular index of nested input arrays", () => {
  expect(lineManipulator(testArray)).to.eql({
    neutral: [10, 0, 5, 5, 10, 0, 5],
    happy: [5, 5, 5, 2, 5, 5, 5],
    sad: [2, 0, 3, 5, 2, 0, 3],
    angry: [5, 5, 5, 16, 5, 5, 5],
    fearful: [5, 25, 5, 0, 5, 25, 5],
    disgusted: [8, 5, 7, 5, 8, 5, 7],
    surprised: [5, 5, 19, 5, 5, 5, 19]
  });
});

});