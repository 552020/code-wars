// ***CODE WARS***

// Remonving String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

noSpace = (x) => x.replace(/\s+/g, "");

// second best without regex

function noSpace(x) {
  return x.split(" ").join("");
}

// third best with another regex expression

const noSpace = (x) => x.replace(/ /g, "");

// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr;
};

// my second solution

const moveZeros = function (arr) {
  for (const i of arr) {
    if (i === 0) {
      arr.push(i);
      arr.splice(arr.indexOf(i), 1);
    }
  }
  return arr;
};

// best practice and most clever

var moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = (n) => (n === 0 ? 0 : n.toString(2).match(/1/g).length);

// best practice

countBits = (n) => n.toString(2).split("0").join("").length;

// *** Descending Order
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  nStr = n.toString();

  nArr = [];
  for (i = 0; i < nStr.length; i++) {
    nArr.push(nStr[i]);
  }

  newArr = [];
  for (let i = 0; i < nStr.length; i++) {
    newArr.push(Math.max(...nArr));
    nArr.splice(nArr.indexOf(Math.max(...nArr).toString()), 1);
  }
  return Number(newArr.join(""));
}

// best practice

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// *** Grasshopper - Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

var summation = function (num) {
  let sum = 1;
  for (let i = 2; i < num + 1; i++) {
    sum = sum + i;
  }
  return sum;
};

// best practice - not so different from mine

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

// most clever

const summation = (n) => (n * (n + 1)) / 2;

// ***  Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  return (newStrArr = str
    .split(" ")
    .map((word) =>
      !/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g.test(word)
        ? word.slice(1) + word.slice(0, 1) + "ay"
        : word
    )
    .join(" "));
}

// best practice

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(arrA) {
  for (const elA of arrA) {
    let arrB = [];
    for (const elB of arrA) {
      if (elA === elB) {
        arrB.push(elA);
      }
    }
    if (arrB.length % 2 !== 0) {
      return elA;
    }
  }
}

// first solution I found

function findOdd(arrA) {
  for (let i = 0; i < arrA.length; i++) {
    arrB = [];
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[i] === arrA[j]) {
        arrB.push(arrA[i]);
      }
    }
    if (arrB.length % 2 !== 0) {
      return arrA[i];
    }
  }
}

// best practice and most clever
// ^ is the Bitwise XOR operator
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// first one I can understand

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

// *** Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let re = new RegExp(/[aeiou]+/gi);
  return str.replace(re, "");
}

// Note - my solution with str.replaceAll didn't work cause replaceAll is too new probably

function disemvowel(str) {
  return str
    .replaceAll("a", "")
    .replaceAll("A", "")
    .replaceAll("e", "")
    .replaceAll("E", "")
    .replaceAll("i", "")
    .replaceAll("I", "")
    .replaceAll("o", "")
    .replaceAll("a", "")
    .replaceAll("u", "")
    .replaceAll("U", "");
}

// best practice

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Find the smallest integer in the array - 8kyu
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// My solution was also the best practice and most clever solution 🎉

// *** Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(num) {
  let newNumber = [];
  let passedNumber = num;
  console.log(passedNumber);
  while (passedNumber > 0) {
    newNumber.push(passedNumber % 10);
    console.log(newNumber);
    passedNumber = parseInt(passedNumber / 10);
  }

  return newNumber;
}

// best practice

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string) {
  spinArr = string.split(" ");

  let spinNew = [];
  for (let i = 0; i < spinArr.length; i++) {
    if (spinArr[i].length >= 5) {
      let reversedWord = [];
      for (let j = 0; j < spinArr[i].length; j++) {
        reversedWord.unshift(spinArr[i].charAt(j));
      }
      spinNew.push(reversedWord.join(""));
    } else {
      spinNew.push(spinArr[i]);
    }
  }
  return spinNew.join(" ");
}

// best practice

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

// *** You're square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

const isSquare = (n) => (Number.isInteger(Math.sqrt(n)) ? true : false);

// best practice and most clever

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//*** Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let arrNumStr = numbers.split(" ");
  let arrNumNum = [];
  for (let i = 0; i < arrNumStr.length; i++) {
    arrNumNum.push(parseInt(arrNumStr[i]));
  }
  let max = Math.max(...arrNumNum).toString();
  let min = Math.min(...arrNumNum).toString();
  return `${max} ${min}`;
}

// best practice

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// *** Square every digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// this is the first one I solved without "testing" it before!

function squareDigits(num) {
  let numArr = [];
  let numArrPower = [];
  numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    numArr.push(parseInt(numString.charAt(i)));
  }
  for (let j = 0; j < numArr.length; j++) {
    let numPower = numArr[j] * numArr[j];
    numArrPower.push(numPower);
  }
  return parseInt(numArrPower.join(""));
}

// best practice and most clever

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

// *** Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  let nNumber = n;

  let nReduced;
  do {
    let nArr = [];
    nString = nNumber.toString();
    for (let i = 0; i < nString.length; i++) {
      nArr.push(parseInt(nString.charAt(i)));
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    nReduced = nArr.reduce(reducer);
    nNumber = nReduced;
  } while (nNumber >= 10);
  return nReduced;
}

// Best practice but more clever than best practice
// https://www.sjsu.edu/faculty/watkins/Digitsum00.htm

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

// and a human one

function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}

// *** Get the Middles Character
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  if (s.length % 2 === 0) {
    let i = s.length / 2;
    return `${s.charAt(i - 1)}${s.charAt(i)}`;
  } else {
    let i = Math.ceil(s.length / 2) - 1;
    return s.charAt(i);
  }
}

// best practice and most clever

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// *** Who likes it? ***
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// Best practice - all the most voted solutions used switch instead of if

function likes(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names[0] + " likes this";
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return (
        names[0] +
        ", " +
        names[1] +
        " and " +
        (names.length - 2) +
        " others like this"
      );
  }
}

// Most clever solution - I had to study it but finally I got it. An object is created with four properties, which have as a value the sentence we want return as template literal. The square brackets after the closing curly bracket is the identfier of the property we want to access and return.

function likes(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  let arrPhoneNumber = ["(", 1, 2, 3, ")", " ", 4, 5, 6, "-", 7, 8, 9, 0];
  arrPhoneNumber.splice(1, 3, numbers[0], numbers[1], numbers[2]);
  arrPhoneNumber.splice(6, 3, numbers[3], numbers[4], numbers[5]);
  arrPhoneNumber.splice(10, 4, numbers[6], numbers[7], numbers[8], numbers[9]);
  return arrPhoneNumber.join("");
}

// Best practice 1
function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

// Best practice 2 - this one got much more clever votes (2267 vs 343) in comparison to the first one

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

//### Vowel Count ###
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

function getCount(str) {
  let vowelsArr = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelsArr.includes(str.charAt(i))) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

// Best practice - my solution stratedy was the second best practice solution

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Be Concise IV - Index of an element in an array
// https://www.codewars.com/kata/5703c093022cd1aae90012c9/solutions/javascript

const find = (arr, e) => (arr.indexOf(e) === -1 ? "Not found" : arr.indexOf(e));

// Best practice solution

const find = (a, x) => ((x = a.indexOf(x)) < 0 ? "Not found" : x);

// ***Multiples of 3 or 5*** //
// https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript

function solution(number) {
  sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      sum = sum + i;
    } else if (i % 5 === 0 && i % 3 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
}

// best practice - not so far away

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// clever - they say it's faster

function solution(number) {
  var n3 = Math.floor(--number / 3),
    n5 = Math.floor(number / 5),
    n15 = Math.floor(number / 15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15 + 1)) / 2;
}
