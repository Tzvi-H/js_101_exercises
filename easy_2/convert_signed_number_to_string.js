// In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer, and converts it to a string representation.

// You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

function integerToString(number) {
  if (number === 0) return '0';

  let string = '';
  let stringDigits = [
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9'
  ];

  while (number > 0) {
    let lastDigit = number % 10;

    string = stringDigits[lastDigit] + string;

    number = Math.floor(number / 10);
  }

  return string;
}

function signedIntegerToString(integer) {
  let string = integerToString(Math.abs(integer));

  switch (Math.sign(integer)) {
    case -1: return '-' + string;
    case 1:  return '+' + string;
    default: return string;
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");