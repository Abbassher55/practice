// Functions
/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

Creating a function 
* In JS we use the keyword "function" to create a function .
* Then we give a name to the function for example test(). We use paranthesis at the last to give a name to the function  .
* Then we have to call the function where we need it . 

* Now lets take an example to understand it . 
*/

//  Example 1
function test() {
  var msg = "The tea is fantastic";
  console.log(msg);
}
test();

/**
 * In this example the keyword function is used for creating a function .
 * test() is the name of funnction . and inside the curly braces we have function body.
 * after closing the body we call the function at the end which is test();
 */

//  Example 2
function names() {
  var name = ["Ali", "Ahmad", "Saleem", "Sahil"];
  console.log(name);
  console.log(
    "We have to write anything here. \n Now we have to access the name of the  3rd person"
  );
  console.log(name[2]);
  // Calling the other function here
  test();
}
names();
//  Example 2
function table(number = 5, msg) {
  console.log(msg);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} =  ${number * i}`);
  }
}
table(60, "hello this is a test parameter");
// Anonymous  function
let table4 = function (number = 5) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} =  ${number * i}`);
  }
};

table4();

let test3 = (param1, param2, param3) => {
  return param1;
};

//let test4 = test3("this value should return back to me", "ignore", "ignore");

console.log(test3("this value should return back to me", "ignore", "ignore"));

// //  Example 3

// function stars() {
//   var character = "*";
//   for (let i = 1; i <= 10; i++) {
//     let row = [];
//     for (let a = 1; a <= i; a++) {
//       if (i == 10) {
//         if (a > 6) continue;
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
