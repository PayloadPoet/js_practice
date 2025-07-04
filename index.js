// 1. Given a string, reverse each word in the senctence.
function reverseString(str) {
  return str.split(" ").map(function (word) {
    return word.split("").reverse().join("");
  });
}
const reversedString = reverseString("Harsh bhai kaise ho");
console.log(reversedString.join(" "));

// 2. How to check if an object is an array or not ?
function checkArray(elem) {
  console.log(Array.isArray(elem));
}
checkArray([]);
checkArray({});

// 3. How to empty an array in javascript & do not reset it to a new array, & do not loop through to pop each value ?
let arr = [1, 2, 3, 4, 5];
arr.length = 0;
console.log(arr);

// 4. How would you check if a number is an integer ?
let a = 12;
if (a % 1 === 0) {
  console.log("Integer");
} else {
  console.log("not !");
}

// we can also use this method
Number.isInteger(10);

// 5. Make this work :
// duplicate ([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
function duplicate(arr) {
  console.log(arr.concat(arr));
}
duplicate([1, 2, 3, 4, 5]);

// 6. Write a JavaScript function that reverse a number.
function reverseNumber(num) {
  // easy way: console.log(Number(num.toString().split("").reverse().join("")));
  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
}
reverseNumber(12);

// 7. Write a JavaScript function that checks number weather a passed string is palindrome or not.
function stringPalChecker(str) {
  let reverseStr = str.split("").reverse().join("");
  reverseStr === str ? console.log(true) : console.log(false);
}
stringPalChecker("poop");
stringPalChecker("loop");

// 8. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function stringAlphaBeticalOrder(str) {
  let ans = str.split("").sort().join("");
  console.log(ans);
}
stringAlphaBeticalOrder("apple");

// 9. Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in uppercase.
function capitalizeFirstLetter(str) {
  const capitalizeWord = str.split(" ").map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  console.log(capitalizeWord.join(" "));
}
capitalizeFirstLetter("This is my way to doing things.");

// 10. Write a javascript function to get the number of occurrences of each letter in specified string.
function occ(str) {
  let occurences = {};
  str.split("").forEach(function (elem) {
    if (occurences.hasOwnProperty(elem) === false) {
      occurences[elem] = 1;
    } else {
      occurences[elem]++;
    }
  });
  return occurences;
}
console.log(occ("apple"));

// 11. Loop an array and add all members of it.
// NOTE: Equation: sum = sum + something
function addNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(addNumbers([1, 2, 3, 4, 5]));
