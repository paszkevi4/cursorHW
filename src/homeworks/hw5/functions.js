/*-----1-----*/
const getRandomArray = (length, min, max) => {
  const tempArr = [];
  for (let i = 0; i < length; i++) {
    tempArr.push(Math.round(Math.random() * (max - min) + min));
  }
  return tempArr;
};

/*-----2-----*/
const getModa = (...numbers) => {
  const tempArr = new Array(numbers.length).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) tempArr[i]++;
    }
  }
  let max = Math.max(...tempArr);
  let maxIndex = tempArr.findIndex((el) => {
    if (el == max) return true;
  });
  return numbers[maxIndex];
};

/*-----3-----*/
export const getAverage = (...numbers) => {
  let sum = 0;
  let floatCount = 0;
  numbers.map((el) => {
    Number.isInteger(el) ? (sum += el) : floatCount++;
  });
  return sum / (numbers.length - floatCount);
};

/*-----4-----*/
const getMedian = (...numbers) => {
  numbers.sort((a, b) => a - b);
  let index = Math.floor(numbers.length / 2);
  if (numbers.length % 2) {
    return numbers[index];
  } else {
    return (numbers[index] + numbers[index - 1]) / 2;
  }
};

/*-----5-----*/
const filterEvenNumbers = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return el % 2;
  });
  return tempArr;
};

/*-----6-----*/
const countPositiveNumbers = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return el > 0;
  });
  return tempArr.length;
};

/*-----7-----*/
const getDividedByFive = (...numbers) => {
  let tempArr = numbers.filter((el) => {
    return !(el % 5);
  });
  return tempArr;
};

/*-----8-----*/
export const replaceBadWords = (string) => {
  const badWords = [
    ['fuck', '****'],
    ['shit', '****'],
    ['_', ' '],
  ];
  let newString = string;
  let tempString = '';
  for (let i = 0; i < badWords.length; ) {
    tempString = newString.replace(badWords[i][0], badWords[i][1]);
    newString !== tempString ? (newString = tempString) : i++;
  }
  return newString;
};

/*-----9-----*/
const divideByThree = (word) => {
  word = word.split(' ').join('').toLowerCase();
  const tempArr = [];
  for (let i = 0; i < word.length; i += 3) {
    let currentPart = word.slice(i, i + 3);
    tempArr.push(currentPart);
  }
  return tempArr;
};
