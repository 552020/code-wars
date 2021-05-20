// ***CODE WARS***

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
