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


const lineManipulator = arr => {

  // if arr.length=0

  return { neutral: 0, 
    happy: 0, 
    sad: 0, 
    angry: 0, 
    fearful: 0, 
    disgusted: 0, 
    surprised: 0}

}

module.exports = {donutManipulator, lineManipulator};
