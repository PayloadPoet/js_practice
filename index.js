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

// 12. In an array of numbers and strings, only add those members which are not strings.
function AddNumbersOnly(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(AddNumbersOnly([1, "whoami", 123, 23, "hi", 3]));

// 13. Loop an array of objects and remove all objects which don't have gender's value male
function removeGenderValue(arr) {
  const newArr = arr.filter(function (elem) {
    return elem.gender === "male";
  });
  return console.log(newArr);
}
removeGenderValue([
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "nonspecified" },
  { name: "harshi", gender: "female" },
  { name: "avinya", gender: "female" },
]);

// 2nd-way
let arr = [
  { name: "harsh", gender: "male" },
  { name: "harshita", gender: "female" },
  { name: "abcd", gender: "nonspecified" },
  { name: "harshi", gender: "female" },
  { name: "avinya", gender: "female" },
];

let count = 0;
arr.forEach(function (elem) {
  if (elem.gender !== "male") {
    count++;
  }
});

for (let i = 1; i <= count; i++) {
  for (let j = 0; i < arr.length; j++) {
    if (arr[j].gender !== "male") {
      arr.splice(j, 1);
    }
  }
}

// 14. Write a javascript function to clone an array
function cloneArray(arr) {
  return [...arr];
}
console.log(cloneArray([1, 2, 3, 4, 5]));

// 2-way
function clonedArray(arr) {
  let newArr = [];
  arr.forEach(function (elem) {
    newArr.push(elem);
  });
  return newArr;
}
console.log(clonedArray([1, 2, 3, 4, "hi"]));

// 15. Write a javascript function which accepts an argument and tells its type.
function typeTeller(arg) {
  return typeof arg;
}
console.log(typeTeller([]));
console.log(typeTeller({}));

// 16. write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function retrieve(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log("The provided numbers are too high...");
  }
}
retrieve([1, 2, 3, 4, 5], 3);

// 17. Write a javascript program to find the most frequent item of an array.
function getFrequentItem(arr) {
  let freq = {};
  arr.forEach(function (elem) {
    if (freq.hasOwnProperty(elem)) freq[elem]++;
    else freq[elem] = 1;
  });
  const ans = Object.keys(freq).reduce(function (acc, num) {
    return freq[acc] > freq[num] ? acc : num;
  });
  console.log(ans);
}
getFrequentItem([1, 2, 3, 3, 3, 3, 2, 2]);

// 18. Write a function to shuffle an Array.
function shuffleArray(arr) {
  let totalShuffleArea = arr.length;

  while (totalShuffleArea > 0) {
    totalShuffleArea--;
    let indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea);
    let temp = arr[totalShuffleArea];
    arr[totalShuffleArea] = arr[indexToBeExchanged];
    arr[indexToBeExchanged] = temp;
  }

  return arr;
}
shuffleArray([1, 2, 3, 4, 5, 6, 7]);
