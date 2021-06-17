//  Anonymous Functions

//  The name of this function  is the variable name which the function is assigned as value.

// Example no 1

let table = function (a) {
  for (i = 1; i <= 10; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
  }
};
table(19);

// Example 2
var numbers = function () {
  console.log(`The following are even numbers upto 100`);
  for (i = 2; i <= 100; i += 2) {
    console.log(`${i}`);
  }
};
numbers();

// Example 3
var oddNumbers = function () {
  console.log(`The following are odd numbers upto 99`);
  for (i = 1; i <= 100; i += 2) {
    console.log(`${i}`);
  }
};
oddNumbers();

// Example 4
var sqaureOfNumbers = function () {
  console.log(`The following are the square of the numbers `);
  for (number = 1; number <= 12; number++) {
    console.log(` The square of the number ${number} is ${number * number} `);
  }
};
sqaureOfNumbers();

//  Example No 5
var cubicNumbers = function () {
  console.log(`The number with the cubes or three times multiplied with self`);
  for (cubicNumber = 1; cubicNumber <= 10; cubicNumber++) {
    console.log(
      `The cube of the number ${cubicNumber} is ${
        cubicNumber * cubicNumber * cubicNumber
      }`
    );
  }
};
cubicNumbers();

//  Printing patterns  with loops and functions

//  Example No 1 for printing "* Pattern
// function stars() {
//   var character = "*";
//   for (let i = 1; i <= 10; i++) {
//     let row = [];
//     for (let a = 1; a <= i; a++) {
//       if (i == 10) {
//         if (a > 4) {continue};
//         row.push(character);
//       } else {
//         if (a == 1) row.push(character);
//         else if (a == i) row.push(character);
//         else row.push("");
//       }
//     }
//     console.log(row.toString());
//   }
// }
// stars();

// Example no 2 for printing "+"  patterns

// let pluses = function () {
//   var character = "+";
//   for (let i = 1; i <= 10; i++) {
//     let row = [];
//     for (let a = 1; a <= i; a++) {
//       if (i == 10) {
//         if (a > 6) {
//           continue;
//         }
//         row.push(character);
//       } else {
//         if (a == 1) row.push(character);
//         else if (a == i) row.push(character);
//         else row.push("");
//       }
//     }
//     console.log(row.toString());
//   }
// };
// pluses();
