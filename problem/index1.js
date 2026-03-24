// Quick Concept Cheatsheet
// TopicKey PatternsArraysTwo pointers, sliding window, hash mapTreesDFS/BFS, recursionDPMemoization, tabulation, subproblemsGraphsBFS (shortest path), DFS (connected components)StringsSliding window, two pointers

// 1. Write a function to add two numbers.

function add(a, b) {
  return a + b;
}
add(3, 4);
console.log(add(3, 4));

// 2. Check Even or Odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "odd";
  }
}

console.log(checkEvenOdd(112));

// 3️ Reverse a String

let a = "javascript";

function reverseString(str) {
  return str.split("").reverse().join("");
}
const reverseValue = reverseString(a);
console.log(reverseValue);

// 4 Find Largest Number

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([10, 30, 20, 44]));

// 5 Count String Length (Without length property)

function countLength(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}
console.log(countLength("hello java"));

// 6 Sum of Array Numbers

function sumArr(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArr([1, 2, 3, 4]));

// 7 Find Even Numbers in Array

function evenNumber(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(evenNumber([1, 33, 4, 5, 7, 8]));

// 8 Check Palindrome

function isPlaindrom(str) {
  let rev = str.split("").reverse().join("");
  return rev === str;
}
console.log(isPlaindrom("madam"));

// 9 Remove Duplicates from Array

let dubArr = [11, 2, 3, 4, 3, 4, 3, 4, 9, 2, 32, 21];

function removeDubArr(arr) {
  return [...new Set(arr)];
}
console.log(removeDubArr(dubArr));
