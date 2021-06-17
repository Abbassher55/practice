/*
    JavaScript Numbers Methods
    
    1. isFinite() Method
    * The Number.isFinite() method determines whether a value is a finite number.
    * This method returns true if the value is of the type Number, and equates to a finite number. Otherwise it returns false.
    *  Number.isFinite() is different from the global isFinite() function. The global isFinite() function converts the tested value to a Number, then tests it.
    * Number.isFinite() does not convert the values to a Number, and will not return true for any value that is not of the type Number.
*/

// Example

function myFunction() {
  console.log(
    "If the number is finite it will give us true and if it is not it will give us false value"
  );
  var res = "";
  res = res + Number.isFinite(123) + ": 123 ";
  console.log(res);
  var res1 = "";
  res1 = res1 + Number.isFinite(-1.23) + ": -1.23";
  console.log(res1);
  var res2 = "";
  res2 = res2 + Number.isFinite(5 - 2) + ": 5-2";
  console.log(res2);
  var res3 = "";
  res3 = res3 + Number.isFinite(0) + ": 0";
  console.log(res3);
  var res4 = "";
  res4 = res4 + Number.isFinite("123") + ": '123'";
  console.log(res4);
  var res5 = "";
  res5 = res5 + Number.isFinite("Hello") + ": 'Hello'";
  console.log(res5);
  var res6 = "";
  res6 = res6 + Number.isFinite("2005/12/12") + ": '2005/12/12'";
  console.log(res6);
  var res7 = "";
  res7 = res7 + Number.isFinite(Infinity) + ": Infinity";
  console.log(res7);
  var res8 = "";
  res8 = res8 + Number.isFinite(-Infinity) + ": -Infinity";
  console.log(res8);
  var res9 = "";
  res9 = res9 + Number.isFinite(0 / 0) + ": 0 / 0";
  console.log(res9);
}
myFunction();

/*
    JavaScript Numbers Methods
    
    1. isInteger() Method
    * The Number.isInteger() method determines whether a value an integer.
    * This method returns true if the value is of the type Number, and an integer (a number without decimals). Otherwise it returns false
    */
function isInteger() {
  console.log("Here the true is for integer and the false is for not");
  var num = "";
  num = num + Number.isInteger(123); //true
  console.log(num);
  var num1 = "";
  num1 = num1 + Number.isInteger(-123); //true
  console.log(num1);
  var num2 = "";
  num2 = num2 + Number.isInteger(5 - 2); //true
  console.log(num2);
  var num3 = "";
  num3 = num3 + Number.isInteger(0); //true
  console.log(num3);
  var num4 = "";
  num4 = num4 + Number.isInteger(0.5); //false because this is not integer
  console.log(num4);
  var num5 = "";
  num5 = num5 + Number.isInteger("123"); //false
  console.log(num5);
  var num6 = "";
  num6 = num6 + Number.isInteger(false); //false
  console.log(num6);
  var num7 = "";
  num7 = num7 + Number.isInteger(Infinity); //false
  console.log(num7);
  var num8 = "";
  num8 = num8 + Number.isInteger(-Infinity); //false
  console.log(num8);
  var num9 = "";
  num9 = num9 + Number.isInteger(0 / 0); //false
  console.log(num9);
}
isInteger();

/*
  3 . isNaN() method
* The Number.isNaN() method determines whether a value is NaN (Not-A-Number).
* This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false.
* Number.isNaN() is different from the global isNaN() function. The global isNaN() function converts the tested value to a Number, then tests it.
* Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.
* Tip: In JavaScript, the value NaN is considered a type of number.
*/

function isNanNumber() {
  console.log("Here the true is for Not a number and the false is for number");
  var num = "";
  num = num + Number.isNaN("#abbas");
  console.log(num);
  var num1 = "";
  num1 = num1 + Number.isNaN(-123);
  console.log(num1);
  var num2 = "";
  num2 = num2 + Number.isNaN(5 - 2);
  console.log(num2);
  var num3 = "";
  num3 = num3 + Number.isNaN(0);
  console.log(num3);
  var num4 = "";
  num4 = num4 + Number.isNaN(0.5);
  console.log(num4);
  var num5 = "";
  num5 = num5 + Number.isNaN("123");
  console.log(num5);
  var num6 = "";
  num6 = num6 + Number.isNaN(false);
  console.log(num6);
  var num7 = "";
  num7 = num7 + Number.isNaN(undefined);
  console.log(num7);
  var num8 = "";
  num8 = num8 + Number.isNaN(-Infinity);
  console.log(num8);
  var num9 = "";
  num9 = num9 + Number.isNaN(0 / 0);
  console.log(num9);
}
isNanNumber();

/*
  * 4. Number.isSafeInteger()
  * The Number.isSafeInteger() method determines whether a value is a safe integer.
  * A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number (all integers from (253 - 1) to -(253 - 1))
  * This method returns true if the value is of the type Number, and a safe integer. Otherwise it returns false.
    
*/

function findingSafeInteger() {
  var myNewNumber = "500 written as string";
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
  var myNewNumber = 700;
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
  var myNewNumber = 0.004;
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
  var myNewNumber = 54.54;
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
  var myNewNumber = 12391293129312391293129312931293120310239102931029310293102931239012390129310293012931029;
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
  var myNewNumber = 100011233456576;
  var findIt = Number.isSafeInteger(myNewNumber);
  console.log(
    "False is for not safe integer and True is for safe Integer . So the result of " +
      myNewNumber +
      " is " +
      findIt
  );
}
findingSafeInteger();

/*
 * 5. toExponential() Method
 * The toExponential() method converts a number into an exponential notation.
 */

function convertingToPower() {
  var numericNum = 100000000000;
  var convert = numericNum.toExponential();
  console.log(
    "The number " + numericNum + " can be written in power as " + convert
  );
  var numericNum = 256708967567;
  var convert = numericNum.toExponential();
  console.log(
    "The number " + numericNum + " can be written in power as " + convert
  );
  var numericNum = 98187239874;
  var convert = numericNum.toExponential();
  console.log(
    "The number " + numericNum + " can be written in power as " + convert
  );
}
convertingToPower();

/*
 * 6 . toFixed() method
 * The toFixed() method converts a number into a string, rounding to a specified number of decimals.
 */
function roundingNumbers() {
  var numberToRound = 23123.123123123;
  var howMany = 2;
  var round = numberToRound.toFixed(howMany);
  console.log(
    "Here we round the number " +
      numberToRound +
      " upto " +
      howMany +
      " decimal points so it will gives us " +
      round
  );
  var numberToRound = 23123.123123123;
  var howMany = 4;
  var round = numberToRound.toFixed(howMany);
  console.log(
    "Here we round the number " +
      numberToRound +
      " upto " +
      howMany +
      " decimal points so it will gives us " +
      round
  );
}
roundingNumbers();

/*
 * 7. toLocaleString()
 * The toLocaleString() method converts a number into a string, using a local language format.
 * The default language depends on the locale setup on your computer.
 */
function tolocalStringConversion() {
  var num = new Number(1000000).toLocaleString("ko-KR");
  console.log(num);
}
tolocalStringConversion();

function tolocalStringConversion() {
  var num = new Number(1000000).toLocaleString("fi-FI");
  console.log(num);
}
tolocalStringConversion();
