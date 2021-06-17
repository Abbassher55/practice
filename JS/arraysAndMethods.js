/* JS Arrays
 * The Array object is used to store multiple values in a single variable:
 *Array indexes are zero-based: The first element in the array is 0, the second is 1, and so on.
 */

//  Example No 1

var cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
console.log("This is First Example of array");

//  Example No 2

var names = [
  "Abbas Sher",
  "Shah Khalid",
  "Samad ",
  "Jawad",
  "Ihtisham ",
  "Naveed",
  "Shahid",
  "Salman",
];
console.log(names);
console.log("This is Second Example of array");

//  Example No 3

var groups = ["Group 1 ", "Group 2", "Group 3", "Group 4", "Group 5"];
console.log("Printing the groups" + groups);

console.log("This is 3 Example of array");

/*
 *    Array functions
 * 1 . concat( )
 * Example  1
 */
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children);

//  Example 2
var carsArray = ["Toyota", "Tesla", "Proton", "SUZUKI", "Caltus", "Honda"];
var trucks = ["Zalzala", "RWD", "Tesla "];
var vehicles = carsArray.concat(trucks);
console.log(vehicles);

//  Example 3

var firstNames = ["Abbas", "Saad", "Rahmat"];
var secondNames = ["Sher", "Khan", "Ali"];
var totalNames = firstNames.concat(secondNames);
console.log(totalNames);

// Example 4 more than two arrays

var number1 = ["Cecilie", "Lone"];
var number2 = ["Emil", "Tobias", "Linus"];
var number3 = ["Robin"];
var number4 = number1.concat(number2, number3);
console.log("This is the last eaxmple of array concat");
console.log(number4 + "\n");

//  Finding the length of the Array

var colors = [" Black ", "  Red  ", " Blue ", " White ", " Green "];
console.log("The first array is " + colors);
var moreColors = ["Skye blue ", "Indigo", "Violet", "Orange"];
console.log("The first array is " + moreColors);
console.log("Combining both arrays");
var totalColors = colors.concat(moreColors);
console.log("Printing the  arrays both with concatinating with each other");
console.log(totalColors);
console.log("\n");

console.log("Now finding the length of the array colors 1st");
var colorsLength = colors.length;
console.log("The length of the first array is " + colorsLength);
var moreColorsLength = moreColors.length;
console.log("The length of the second array is " + moreColorsLength);
var lengthOfAll = totalColors.length;
console.log("total number of colors in both arrays are " + lengthOfAll);

/*
 *    Array functions
 * 2 . CopyWithIn( )
 * The copyWithin() method copies array elements to another position in the array, overwriting the existing values.
 * This method will never add more items to the array.
 * array.copyWithin(target, start, end)
 * Example  1
 */

var fruits = ["Banana", "Apple", "Mango", "Appricot", "Plum"];
var copy = fruits.copyWithin(2, 1);
console.log(copy);

/*  3. pop() method
 *  The pop() method removes the last element from an array:
 */
function removeArray() {
  var cars = [" toyota ", " honda ", " Tesla "];
  console.log(cars);
  var removeCar = cars.pop();
  console.log(
    "This will give us the last element of the array Cars  which is " +
      removeCar
  );
}
removeArray();

/* 4 .  push() method
 *  The push() method adds a new element to an array (at the end):
 */
//  Example 1
function addElement() {
  var fruits = ["Banana", "Mango", "Melon"];
  console.log(fruits);
  var addNew = fruits.push("Apple");
  console.log("Adding 'Apple' to the array at number " + addNew);
  console.log(fruits);
}
addElement();

//  Example 2
function addAnotherElement() {
  console.log("My new Array of Cars");
  var cars = ["toyota", "Alto", "corolla", "Mercedez"];
  console.log(cars);
  console.log("Adding new Element to the array by push() method ");
  var addNew = cars.push("BMW");
  console.log(cars);
}
addAnotherElement();
/* 5. The shift() method
 * The shift() method removes the first array element and "shifts" all other elements to a lower index.
 */
function removeElement() {
  console.log("Array of groceries");
  var groceries = ["Buckets", "Cups", "Glasses", "Pots"];
  console.log(groceries);
  var removeElement = groceries.shift();
  console.log(
    "After removing the first element  from the groceries array the array will be "
  );
  console.log(groceries);
}
removeElement();

//  Example 2
function removeElement2() {
  console.log("This is array of  planets");
  var planets = ["Earth ", " Mars ", "Jupiter  ", "Mercury", "Saturn "];
  console.log("Removing the elements Earth from the array ");
  var removeEarth = planets.shift();
  console.log("The array of the planets will become ");
  console.log(planets);
}
removeElement2();

/* 6. unshift() method
 * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 */
function addingElement() {
  console.log("Adding a list of vegetables into array ");
  var vegetables = ["Potato", "Onion ", "Tomato ", "Spinach", "Ginger"];
  console.log(vegetables);
  var removeOne = vegetables.pop();
  console.log("Adding a vegetable PEAS to array so the array will be");
  var addingElement = vegetables.unshift("Peas");
  console.log(vegetables);
}
addingElement();

/* Changing Elements In Arrays
 *  Array elements are accessed using their index number:
 *Array indexes start with 0. [0] is the first array element, [1] is the second, [2] is the third ........
 */
function changeElement() {
  console.log("Changing the element inside the array ");
  var fruits = ["Banana", "Vegetables ", "Melon", "Grapes"];
  console.log("The array elements are");
  console.log(fruits);
  console.log("Change the first element into Stawberry");
  fruits[0] = "Stawberry";
  console.log(fruits);
}
changeElement();

/**
 * The length property provides an easy way to append a new element to an array:
 */
function addingArrayElement() {
  console.log("Adding array Element with length property ");
  var cities = [
    "Lahore",
    "Islamabad",
    "Karachi",
    "Multan",
    "FaisalAbad",
    "Sialkot",
    "Swat",
    "Quetta",
    "Gilgit",
  ];
  console.log("The Major Cities of Pakistan are ");
  console.log(cities);
  cities[cities.length] = "Peshawar";
  console.log("The Peshawar will be added to the last index of the array");
  console.log(cities);
}
addingArrayElement();

/**
 *  Deleting element from array
 * Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete
 */
function deletingElement() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits);
  console.log("After deleting the first item the array will give us result as");
  delete fruits[0];
  console.log(fruits);
  /**
   * This will empty one index and will give us empty index at result.
   *  Note : Using delete may leave undefined holes in the array. Use pop() or shift() instead.
   */
}
deletingElement();

/*  Splicing an Array
 * The splice() method can be used to add new items to an array:
 */

//   Using slpice( ) method to add objects
//  Example 1
function addingElementWithSplice() {
  console.log("Array elements are ");
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits);
  //  Now adding two elments to the array
  fruits.splice(2, 0, "Lemon", "Kiwi");
  //  The first parameter (2) defines the position where new elements should be added (spliced in).
  //  The second parameter (0) defines how many elements should be removed.
  //  The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
  console.log("The new array is ");
  console.log(fruits);
}
addingElementWithSplice();

//  Example 2
function addingElementWithSplice2() {
  console.log("Array of birds");
  var birds = ["Hen", "Cock", "Pea Cock", "Crow", "Eagle", "Owl", "Sparrow"];
  console.log(birds);
  birds.splice(0, 0, "Parrot");
  console.log("The array will become ");
  console.log(birds);
  console.log("Adding the element in the middle of the array ");
  birds.splice(4, 0, "Quail");
  console.log(birds);
}
addingElementWithSplice2();

//  Example 3
//  Adding elements with removing elements

function addingElementWithRemoving() {
  console.log("Our array is ");
  var arrayFruits = ["Appricot ", "Plum ", "Mango ", "Potato", "Guvava"];
  console.log(arrayFruits);
  var removedElements = arrayFruits.splice(3, 3, "Apple");
  console.log("Removing the Potato from the array so it will be  ");
  console.log(arrayFruits);
  console.log("Removed elements are " + removedElements);
}
addingElementWithRemoving();

/* Using splice for the  removing of element
 * With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
 */
function removingWithSplice() {
  var myArray = ["Ali", "Ahmad", "Saleem", "Subhan", "Shahid"];
  console.log("Suppose these all are business partners ");
  console.log(myArray);
  console.log(
    "One of the partner 'Saleem' leaving the business So the array  will be as "
  );
  myArray.splice(2, 1);
  console.log(myArray);
}
removingWithSplice();

/*
 *   Sorting Arrays
 *  The sort() method sorts an array alphabetically.
 * It means that it will arrange the array in Ascending order.
 */

//   Example 1
function arraySorting() {
  var names = ["Sameer", "Ahmad", "Fawad", "Ali", "Qadir", "Samad"];
  console.log("The array names are ");
  console.log(names);
  console.log(
    "Sorting the array in Ascending order with respect to Alphabatical order"
  );
  var arrange = names.sort();
  console.log(arrange);
}
arraySorting();

//  Example 2

function arraySorting2() {
  var places = [
    "Lahore",
    "Islamabad",
    "Karachi",
    "Multan",
    "Peshawar",
    "Faisal Abad",
    "Mardan",
    "Kohat",
  ];
  console.log("The names of the cities of Pakistan are");
  console.log(places);
  console.log(" Now arranging the names in Alphabatical order");
  var citiesAsc = places.sort();
  console.log(citiesAsc);
}
arraySorting2();

//  Example 2
function arraySorting3() {
  var vegetables = [
    "Ginger",
    "Lemon",
    "Chillis",
    "Capsicum",
    "Potao",
    "Tomato",
    "Onion",
    "Garlic",
    "Cucumber",
    "Lady Finger",
    "Spinach",
    "Egg Plant",
  ];
  console.log(vegetables);
  console.log(
    "The first array is the vegetables array which is written directly and then \n we will arrange the array in Ascending order"
  );
  var sorting = vegetables.sort();
  console.log(sorting);
}
arraySorting3();

//  Arranging the array in descending order
//  For this we will use the reverse() method which is built in method of array for descending order.
// This method will reverse the whole order and will start from the end index and will complet at index 0

//  Example 1
function arraySortingDec() {
  console.log("Arranging the arrays in Descending order");
  var cars = [
    "Acura",
    "Alfa Romeo",
    "Audi",
    "BMW",
    "Bentley",
    "Buick",
    "Cadillac",
    "Chevrolet",
    "Jaguar",
  ];
  console.log(cars);
  console.log(
    "The array is displayed as written \nNow arranging This in Descending order"
  );
  var arrangingDec = cars.reverse();
  console.log(arrangingDec);
}
arraySortingDec();

//  Example 2

function reversingArray() {
  var arrayNames = [
    "Sher",
    "Ali",
    "Zaid",
    "Samad",
    "Jawad ",
    "Sameer",
    "Abbas",
    "Ihtisham",
    "Ahmad",
    "Fayaz",
    "Naveed",
    "Zafar",
    "Javed",
    "Kamal",
    "Jamal",
    "Yousuf",
    "Sajid",
  ];
  console.log("The array of the names is ");
  console.log(arrayNames);
  console.log("Arranging the array of names in descending order");
  var descendingOrder = arrayNames.reverse();
  console.log(descendingOrder);
}
reversingArray();

/* Array.some method
 * This method is used to check the test of the array elements
 * It will return boolean value ( True or False )
 * It is written as  array.some(testFunctionName)
 */

//  Example 1

var ages = [3, 10, 18, 20];
function checkAdult(age) {
  return age >= 21;
}
function myFunction() {
  console.log(ages.some(checkAdult));
}
myFunction();

//  Example 2

function getEvenNumbers() {
  var arr = [4, 5, 7, 8, 14, 45, 76];
  var evens = arr.filter((number) => number % 2 == 0);
  console.log("Even Numbers: " + evens);
}

getEvenNumbers();
