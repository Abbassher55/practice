//  Simple Functions

const btnShow = document.getElementById("btn");

function simpleFunction() {
  console.log("This is simple Function ");
}
btnShow.addEventListener("click", simpleFunction);

//  Functions Expressions storing Functions in Variables

const GreetBtn = document.getElementById("Greet");

const greeting = function greet() {
  console.log("Functional Expression is in used ");
};

//  This will Give us Error
// GreetBtn.addEventListener("click", greet);

//  We will access it like this
GreetBtn.addEventListener("click", greeting);

//  Anonymous Functions

var btnClick = document.getElementById("Click");

var clickThis = function () {
  console.log("Here Anonymous Function is Called");
};

btnClick.addEventListener("click", clickThis);

//  Recursive Function

function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}
countDown(3);

function table(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert(table(9, 3));

//  Call Back Functions

// Where to use callbacks

//  callbacks are used in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

function display(some) {
  document.getElementById("displayHere").innerHTML = some;
}

function add(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

add(6, 5, display);

function display2(sub) {
  document.getElementById("SecondDisplayHere").innerHTML = sub;
}

function subtract(number1, number2, myCallback2) {
  let sub = number1 - number2;
  myCallback2(sub);
}

subtract(6, 5, display2);

//  Example 2

//  Example Explanation

//  First it will check the name argument as it doesnt have any value at the top

//  So it will go to the next fucntion processUserInput in which we have pass callback as an argument which is also a function . Now here the prompt will show to the user and thus we will get the value from the user in prompt.
//  now callback will store the value of name and we will pass the upper greetingTo function here to the  processUserInputto get the value and show alert greeting.

function greetingTo(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greetingTo);
