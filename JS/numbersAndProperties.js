// JavaScript Numbers

/*
    JavaScript has only one type of number.
    Numbers can be written with, or without, decimals:
*/

// Example 1

function printNumber1() {
  var number1 = 200;
  var number2 = 20.34;
  var sumNumber = number1 + number2;
  console.log("The sum of 200 and 20.34 is " + sumNumber);
}
printNumber1();

//  Example 2
function printNumber2() {
  var firstnumber1 = 32.3232;
  var secondnumber1 = 2.327;
  var subtractNumber1 = firstnumber1 - secondnumber1;
  console.log("Subtracting 2.327 from 32.3232 gives us " + subtractNumber1);
}

printNumber2();

//  Example 3
function printNumber3() {
  var firstnumber2 = 0.123;
  var secondnumber2 = 0.5234;
  var addNumber2 = firstnumber2 + secondnumber2;
  console.log("Adding 0.123 with 0.5234 gives us " + addNumber2);
}

printNumber3();

/* 
    * Writing Extra large or extra small numbers numbers in JS
        1. For writing these numbers we need scientific notation.
        2. To write a number in scientific notation we will use "e" for Exponent
            e.g 123e3 this means that 153X10^3 
        3. We can write extra small number with 12345e-n    
*/

//  Example of these types of numbers

function numbersWithPower() {
  var myNumber1 = 123e6;
  var myNumber2 = 4321e7;
  console.log(
    "Printing these numbers which have power , 123 to the power 6 and 4321 to the power 7 will give us " +
      myNumber1 +
      " " +
      myNumber2
  );

  var myNegativeNumber1 = 1234e-9;
  var myNegativeNumber2 = 2345e-2;
  console.log(
    "Printing these numbers which have negative power " +
      myNegativeNumber1 +
      " " +
      myNegativeNumber2
  );
}

numbersWithPower();

/* JS Number Properties

   1 . Constructor Property 

    * The constructor property returns the function that created the numbers's prototype: 
    * The return value is a reference to the function, not the name of the function:
    * For JavaScript numbers the constructor property returns function Number() { [native code] } 
*/

function constructorNum() {
  var num1 = 1234;
  var num2 = 4353;
  console.log(
    "Contruct of number 1234 is '" +
      num1.constructor +
      "' and Constructor of number 4353 is '" +
      num1.constructor +
      "'"
  );
}
constructorNum();

/* 2 . MAX_VALUE property 
    Return the largest number possible in JavaScript.
*/

// Example
function largestValue() {
  var largestValue = Number.MAX_VALUE;
  console.log("The largest possible value in JS is '" + largestValue + "'");
}

largestValue();

/*
  3 . MIN_VALUE property 
  Return the smallest positive number possible in JavaScript:
*/

// Example

function smallestValue() {
  var smallValue = Number.MIN_VALUE;
  console.log(
    "The smallest positive possible value in JS is '" + smallValue + "'"
  );
}

smallestValue();

/*
  4. NEGATIVE_INFINITY Property
  *  The NEGATIVE_INFINITY property represents negative infinity.
  *  Negative infinity can be explained as something that is lower than any other number.
  *  NEGATIVE_INFINITY is a static property of the JavaScript Number object.
  *  You can only use it as Number.NEGATIVE_INFINITY.
  *  Using x.NEGATIVE_INFINITY, where x is a number or a Number object, will return undefined:
*/

// Example 1

function negativeInfinity() {
  var numberIs = 21230;
  console.log(
    "Negative infinity of the number is '" + numberIs.NEGATIVE_INFINITY + "'"
  );

  console.log(
    "The negative of a number in JS is '" + Number.NEGATIVE_INFINITY + "'"
  );
}

negativeInfinity();

/* 5. NaN Property
 * The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.
 * The NaN property is the same as the Number.Nan property.
 * Tip: Use the isNaN() global function to check if a value is a NaN value.
 */

function notAvalue() {
  console.log(
    "The number is not a value can be declared as '" + Number.NaN + "'"
  );
}
notAvalue();

/*
  6.  POSITIVE_INFINITY property 
  * The POSITIVE_INFINITY property represents positive infinity.
  * Positive infinity can be explained as something that is higher than any other number.
*/

// Example

function PositiveInfinity() {
  console.log(
    "For returning the positive Infinity we have to use this property '" +
      Number.POSITIVE_INFINITY +
      "'"
  );
}
PositiveInfinity();

//  Example 2

function infinityNum() {
  var myNumber = "10";
  var txt = "This is a finite number ";
  console.log(txt + myNumber);

  var txt = "Changing the number to the 'infinity' ";
  console.log(txt + myNumber / 0 + ". This Number is divided by 0");
}
infinityNum();
/*

/*
  7 . Prototype Property
    * The prototype constructor allows you to add new properties and methods to JavaScript numbers.
    * When constructing a property, ALL numbers will be given the property, and its value, as default.
    * When constructing a method, ALL numbers will have this method available.
    * Note: Number.prototype does not refer to a single number object, but to the Number() object itself.
    * Note: Prototype is a global object constructor which is available for all JavaScript objects.
*/

//  Example

function myPrototypeFunction() {
  var n = 50;
  console.log("This will give us the value " + n.myMethod());
}

Number.prototype.myMethod = function () {
  return this.valueOf() / 2;
};

myPrototypeFunction();
