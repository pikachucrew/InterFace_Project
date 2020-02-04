const donutManipulator = arr => {
  if (arr.length === 0) return [0, 0, 0, 0, 0, 0, 0];

  return arr.slice(0, -2)
    .reduce(
      (returnArray, innerArray) => {
        innerArray.forEach((num, i) => {
          returnArray[i] += num;
        });
        return returnArray;
      },
      [0, 0, 0, 0, 0, 0, 0]
    )
    .map(num => num / arr.length);
};

module.exports = donutManipulator;
