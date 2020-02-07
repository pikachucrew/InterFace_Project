const donutManipulator = arr => {
  if (arr.length === 0) return [0, 0, 0, 0, 0, 0, 0];
  return arr
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
  const returnObj = {
    neutral: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    happy: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    sad: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    angry: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    fearful: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    disgusted: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    surprised: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };

  if (arr.length === 0) {
    return returnObj;
  }

  let nine = 0;
  let ten = 0;
  let eleven = 0;
  let twelve = 0;
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  arr.forEach(tableRow => {
    const hour = tableRow[8].slice(0, 2);
    if (hour === "09") {
      nine = nine + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[0] += num;
        if (i === 1) returnObj.happy[0] += num;
        if (i === 2) returnObj.sad[0] += num;
        if (i === 3) returnObj.angry[0] += num;
        if (i === 4) returnObj.fearful[0] += num;
        if (i === 5) returnObj.disgusted[0] += num;
        if (i === 6) returnObj.surprised[0] += num;
      });
    }
    if (hour === "10") {
      ten = ten + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[1] += num;
        if (i === 1) returnObj.happy[1] += num;
        if (i === 2) returnObj.sad[1] += num;
        if (i === 3) returnObj.angry[1] += num;
        if (i === 4) returnObj.fearful[1] += num;
        if (i === 5) returnObj.disgusted[1] += num;
        if (i === 6) returnObj.surprised[1] += num;
      });
    }
    if (hour === "11") {
      eleven = eleven + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[2] += num;
        if (i === 1) returnObj.happy[2] += num;
        if (i === 2) returnObj.sad[2] += num;
        if (i === 3) returnObj.angry[2] += num;
        if (i === 4) returnObj.fearful[2] += num;
        if (i === 5) returnObj.disgusted[2] += num;
        if (i === 6) returnObj.surprised[2] += num;
      });
    }
    if (hour === "12") {
      twelve = twelve + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[3] += num;
        if (i === 1) returnObj.happy[3] += num;
        if (i === 2) returnObj.sad[3] += num;
        if (i === 3) returnObj.angry[3] += num;
        if (i === 4) returnObj.fearful[3] += num;
        if (i === 5) returnObj.disgusted[3] += num;
        if (i === 6) returnObj.surprised[3] += num;
      });
    }
    if (hour === "13") {
      one = one + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[4] += num;
        if (i === 1) returnObj.happy[4] += num;
        if (i === 2) returnObj.sad[4] += num;
        if (i === 3) returnObj.angry[4] += num;
        if (i === 4) returnObj.fearful[4] += num;
        if (i === 5) returnObj.disgusted[4] += num;
        if (i === 6) returnObj.surprised[4] += num;
      });
    }
    if (hour === "14") {
      two = two + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[5] += num;
        if (i === 1) returnObj.happy[5] += num;
        if (i === 2) returnObj.sad[5] += num;
        if (i === 3) returnObj.angry[5] += num;
        if (i === 4) returnObj.fearful[5] += num;
        if (i === 5) returnObj.disgusted[5] += num;
        if (i === 6) returnObj.surprised[5] += num;
      });
    }
    if (hour === "15") {
      three = three + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[6] += num;
        if (i === 1) returnObj.happy[6] += num;
        if (i === 2) returnObj.sad[6] += num;
        if (i === 3) returnObj.angry[6] += num;
        if (i === 4) returnObj.fearful[6] += num;
        if (i === 5) returnObj.disgusted[6] += num;
        if (i === 6) returnObj.surprised[6] += num;
      });
    }
    if (hour === "16") {
      four = four + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[7] += num;
        if (i === 1) returnObj.happy[7] += num;
        if (i === 2) returnObj.sad[7] += num;
        if (i === 3) returnObj.angry[7] += num;
        if (i === 4) returnObj.fearful[7] += num;
        if (i === 5) returnObj.disgusted[7] += num;
        if (i === 6) returnObj.surprised[7] += num;
      });
    }
    if (hour === "17") {
      five = five + 1;
      tableRow.forEach((num, i) => {
        if (i === 0) returnObj.neutral[8] += num;
        if (i === 1) returnObj.happy[8] += num;
        if (i === 2) returnObj.sad[8] += num;
        if (i === 3) returnObj.angry[8] += num;
        if (i === 4) returnObj.fearful[8] += num;
        if (i === 5) returnObj.disgusted[8] += num;
        if (i === 6) returnObj.surprised[8] += num;
      });
    }
  });

  const newVals = Object.values(returnObj).map(emotionArray => {
    const newemotionArray = emotionArray.map((num, i) => {
      if (i === 0) {
        num = num / nine;
      }
      if (i === 1) {
        num = num / ten;
      }
      if (i === 2) {
        num = num / eleven;
      }
      if (i === 3) {
        num = num / twelve;
      }
      if (i === 4) {
        num = num / one;
      }
      if (i === 5) {
        num = num / two;
      }
      if (i === 6) {
        num = num / three;
      }
      if (i === 7) {
        num = num / four;
      }
      if (i === 8) {
        num = num / five;
      }
      return num;
    });
    return newemotionArray;
  });

  newVals.forEach((arr, i) => {
    if (i === 0) returnObj.neutral = arr;
    if (i === 1) returnObj.happy = arr;
    if (i === 2) returnObj.sad = arr;
    if (i === 3) returnObj.angry = arr;
    if (i === 4) returnObj.fearful = arr;
    if (i === 5) returnObj.disgusted = arr;
    if (i === 6) returnObj.surprised = arr;
  });

  return returnObj;
};

const liveLineManipulator = arr => {
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
  } else if (minutes < 10) {
    minutes = "0" + minutes--;
  } else {
    minutes--;
  }

  if (hours < 10) {
    hours = "0" + hours
  }
  console.log(hours + ":" + minutes + ":" + seconds)
  return hours + ":" + minutes + ":" + seconds;
};

module.exports = {
  donutManipulator,
  lineManipulator,
  liveLineManipulator,
  getTime
};
