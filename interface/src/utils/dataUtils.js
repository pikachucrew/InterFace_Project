const donutManipulator = arr => {
  if (arr.length === 0) return [0, 0, 0, 0, 0, 0, 0];

  return arr
    .slice(0, -2)
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
  if (arr.length === 0) {
    return {
      neutral: [0, 0, 0, 0, 0, 0, 0],
      happy: [0, 0, 0, 0, 0, 0, 0],
      sad: [0, 0, 0, 0, 0, 0, 0],
      angry: [0, 0, 0, 0, 0, 0, 0],
      fearful: [0, 0, 0, 0, 0, 0, 0],
      disgusted: [0, 0, 0, 0, 0, 0, 0],
      surprised: [0, 0, 0, 0, 0, 0, 0]
    };
  }

  return arr.reverse().reduce(
    (returnObj, innerArr) => {
      innerArr.slice(0, -2).forEach((num, i) => {
        if (i === 0) {
          returnObj.neutral.push(num);
        }
        if (i === 1) {
          returnObj.happy.push(num);
        }
        if (i === 2) {
          returnObj.sad.push(num);
        }
        if (i === 3) {
          returnObj.angry.push(num);
        }
        if (i === 4) {
          returnObj.fearful.push(num);
        }
        if (i === 5) {
          returnObj.disgusted.push(num);
        }
        if (i === 6) {
          returnObj.surprised.push(num);
        }
      });
      return returnObj;
    },
    {
      neutral: [],
      happy: [],
      sad: [],
      angry: [],
      fearful: [],
      disgusted: [],
      surprised: []
    }
  );
};

const checkTime = i => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const seconds = checkTime(date.getSeconds());

  if (minutes === 0) {
    hours--;
    minutes = 59;
  } else {
    minutes--;
  }

  return hours + ":" + minutes + ":" + seconds;
};

module.exports = { donutManipulator, lineManipulator, getTime };
