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
