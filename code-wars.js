// ***CODE WARS***
// Vowel Count
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
