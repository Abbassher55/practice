/* First we should have to know how to store inside the variable.

  * To store a string we must first declare a variabloe.
  * After the decalaration we can store the string inside that variable.
*/

function storeString() {
  var strName = "Abbas Sher";
  /* In this the var is JS resrve keyword use for declaring a variable.
   * The variable name is strName
   */
  console.log(strName);
}

// Now Calling function for printing the value Abbas Sher

storeString();

/*
 * JavaScript String Properties and methods .
 *
 *  charAt() method
 *  The charAt() method returns the character at the specified index in a string.
 */

// Exapmle 1
function myFunction() {
  var str = "HELLO WORLD";
  var res = str.charAt(0);
  console.log("The character at 1 position is " + res);
}

myFunction();

// Example 2

function printS() {
  var toys = "Kid Toys";
  var resWord = toys.charAt(7);
  console.log("The character at 7 position is " + resWord);
}
printS();

// Example 3

function printMiddleAlphabet() {
  var word = "This_is_a_sentence";
  var result = word.charAt(word.length / 2);
  console.log("The character at Mid is " + result);
}

// Here the length is used for the total length of the variable word
printMiddleAlphabet();

/*  
  * Let use the second method charCodeAt();
  *The charCodeAt() method returns the Unicode of the character at the specified index in a string.

 */

//   Example 1

function sentence() {
  var mySentence = "This is a Sentence";
  var unicodeOfS = mySentence.charCodeAt(mySentence.length - 8);
  console.log("The unicode of a is " + unicodeOfS);
}
// This function will give us 115 which is the unicode of s alphabet.
sentence();

// Example 2

function filterWord() {
  var keyboard = "Mouse and Keyboard";
  var unicodeOfK = keyboard.charCodeAt(keyboard.length - 8);
  console.log("The unicode of K is " + unicodeOfK);
}

filterWord();

/*  Finding a String in a String
 * 1 . The indexOf() method returns the position of the first occurrence of a specified text in a string.
 * if the word is not in the string the result will give us -1
 *  lets use indexOf() in the following examples.
 *
 *
 * Example 1
 */

function findingPos() {
  var text = " Find the position of ' Lahore' in this sentence ";
  var position = text.indexOf("Lahore");
  console.log("Lahore is at " + position + " index in this string");
}

findingPos();

/*
 * Example 2
 */

function findingPos2() {
  var text2 =
    "hello to the school students . i welcome all of the students to the hall";
  var position2 = text2.indexOf("students");
  console.log("Index of students in this sentence is " + position2);
}
findingPos2();

//  Example 3
function findingPos3() {
  var text3 = "Starting index of 'B' is";
  var position3 = text3.indexOf("B");
  console.log("Here the Starting index of B is " + position3);
}

findingPos3();

//  Example 4
function findingPos4() {
  var text4 = "Starting index of 'B' is";
  var position4 = text4.indexOf("A");
  console.log(
    "Here the Starting index of A is " +
      position4 +
      ". It will give us -1 because A is not in the sentence."
  );
}

findingPos4();

/* Finding a string in a string
      
    * 2. The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
      * This gives us last index of the word that is repeated in the sentence. 
      * if the word is not in the string the result will give us -1
      * Let take example and use the lastIndexOf() method.
      * Example 1
  */
function findingPosWithLastIndex() {
  var myString1 =
    "Where is the position of locate in this sentence where we use locate two times ";
  var pos1 = myString1.lastIndexOf("locate");
  console.log("The last index of the locate is here " + pos1);
}
findingPosWithLastIndex();

// Example 2

function findingPosWithLastIndex1() {
  var myString2 =
    "hello to the school students . i welcome all of the students to the hall";
  var pos2 = myString2.lastIndexOf("students");
  console.log("last Index of students in this sentence is " + pos2);
}
findingPosWithLastIndex1();

/*
 * Finding a string in a string
 * 3. The search() method returns the position of the first occurrence of a specified text.
 * This gives us the index of the word that is specified.
 *  We can find starting index of a word in a sentence through this .
 */

// Example 1

function findWord() {
  var myWordInSentence =
    "Swat is a beautiful place. Mingora is the central and bussiness zone of Swat.";
  var findThis = myWordInSentence.search("Mingora");
  console.log("The index of Mingora word in the sentence is " + findThis);
}

findWord();

// Example 2

function findWord2() {
  var myWordInSentence2 =
    "Swat is a beautiful place. Mingora is the central and bussiness zone of Swat.";
  var findThis2 = myWordInSentence2.search("Bussiness");
  console.log(
    "The index of Bussiness word in the sentence is " +
      findThis2 +
      " Because J.Script is case sensitive and the b is in small letters in the given input sentence."
  );
}

findWord2();

// Example 3

function findWord3() {
  var myWordInSentence3 =
    "Swat is a beautiful place. Mingora is the central and bussiness zone of Swat.";
  var findThis3 = myWordInSentence3.search("central");
  console.log("The index of central word in the sentence is " + findThis3);
}

findWord3();

/*       -- Important Note --
 * The two methods, indexOf() and search(), are equal?
 * The two methods are NOT equal. These are the differences:
 * The search() method cannot take a second start position argument.
 * The indexOf() method cannot take powerful search values (regular expressions).
 */

/*
 * Finding a string in a string
 * 4. The slice() Method
 * slice() extracts a part of a string and returns the extracted part in a new string.
 * The method takes 2 parameters: the start position, and the end position (end not included).
 */

// Example 1

function sliceMethod() {
  var sliceString = "Apple, Banana, Kiwi";
  var sliceResult = sliceString.slice(7, 13);
  console.log("The part of this string is " + sliceResult);
}

sliceMethod();

// Example 2

function sliceMethod2() {
  var sliceString2 = "Apple, mango , Banana, Kiwi";
  var sliceResult2 = sliceString2.slice(7, 13);
  console.log("The part of this string is " + sliceResult2);
}

sliceMethod2();

// Example 3
//  Using slice() to counting from the end.

function sliceMethod3() {
  var sliceString3 = "This is a ball.";
  var findIndex = sliceString3.indexOf("ball");
  console.log(
    "Index of Ball is " + findIndex + " Now we have to slice this part "
  );
  var sliceResult3 = sliceString3.slice(-5); // here - 5 is used for counting from the last
  console.log("The part of this string is " + sliceResult3);
}

sliceMethod3();

/* Finding a string inside a string
 * 5. The substr() Method
 * substr() is similar to slice().
 * The difference is that the second parameter specifies the length of the extracted part.
 */

//  Example 1

function subStrmethod() {
  var subStrSentence =
    "This is a sentence and 'we have to extract this part' from the sentence";
  var resultStr = subStrSentence.substr(23, 30); // The second paramter is the length of the extracted part
  console.log("The extracted part from above sentence is " + resultStr);
}
subStrmethod();

//  Example 2

function subStrmethod2() {
  var subStrSentence2 =
    "This is a sentence and 'we have to extract this part' from the sentence";
  var resultStr2 = subStrSentence2.substr(40, 25); // The second paramter is the length of the extracted part
  console.log("The extracted part from above sentence is " + resultStr2);
}
subStrmethod2();

//  Example 3

function subStrmethod3() {
  var subStrSentence3 =
    "This is a sentence and 'we have to extract this part' from the sentence";
  var resultStr3 = subStrSentence3.substr(34, 18); // The second paramter is the length of the extracted part
  console.log("The extracted part from above sentence is " + resultStr3);
}
subStrmethod3();

/*
 * Finding a string in a string
 * 6. The substring() Method
 * substring() is similar to slice().
 * The difference is that substring() cannot accept negative indexes.
 */

//  Example 1

function subStringMethod() {
  var subString1 = "This is a marker.";
  var subResult = subString1.substring(8, 11);
  console.log("The part of this string is " + subResult);
}

subStringMethod();

//  Example 2

function subStringMethod2() {
  var subString2 =
    "This is a marker. We use it for whiteboard . Pemanent marker is used for other purposes";
  var subResult2 = subString2.substring(45);
  console.log("The part of this string is " + subResult2);
}

subStringMethod2();

//  Example 3

function subStringMethod3() {
  var subString3 =
    "This is a marker. We use it for whiteboard . Pemanent marker is used for other purposes";
  var subResult3 = subString3.substring(21, 42);
  console.log("The part of this string is " + subResult3);
}

subStringMethod3();

/*
   Finding a string in a string
 * 7. The concat() Method
 * The concat() method is used to join two or more strings.
 * This method does not change the existing strings, but returns a new string containing the text of the joined strings.
*/

//  Example 1

function join() {
  var string1 = "This is a marker. ";
  var string2 = "We use it for whiteboard. ";
  var string3 = "Pemanent marker is used for other purposes";
  var joinResult = string1.concat(string2, string3);
  console.log(joinResult);
}

join();

//  Example 2

function join2() {
  var string11 = "I live in Mingora. ";
  var string22 = "There are many cities inside mingora. ";
  var joinResult2 = string11.concat(string22);
  console.log(joinResult2);
}

join2();

//  Example 3

function join3() {
  var firstName = "Abbas ";
  var lastName = "Sher";

  var joinResult3 = firstName.concat(lastName, " And I live in mingora");
  console.log("My full name " + joinResult3);
}

join3();

/*
 * Replacing String Content
 * The replace() method replaces a specified value with another value in a string:
 * The replace() method does not change the string it is called on. It returns a new string.
 * By default, the replace() method replaces only the first match:
 *
 *
 *
 */

//   Example 1

function replaceString() {
  var fullNameIs = "Khan Sher";
  var replaceFirstName = fullNameIs.replace("Khan", "Abbas");
  console.log(
    "After replacing first name Khan The full name is " + replaceFirstName
  );
}

replaceString();

//  Example 2

function replaceString2() {
  var capital = "Lahore is the capital of Pakistan";
  var change = capital.replace("Lahore", "Islamabad");
  //  The replace() method is case sensitive. Writing LAHORE (with upper-case) will not work:
  console.log(change);
}
replaceString2();

// To replace case insensitive, use a regular expression with an /i flag (insensitive):

function replaceString3() {
  var capital1 = "Islamabad is the capital of KPK";
  var change1 = capital1.replace(/ISLAMABAD/i, "Peshawar");
  console.log(change1);
}
replaceString3();

// To replace all matches, use a regular expression with a /g flag (global match):

function replaceAllMatch() {
  var essay =
    "Quaid Azam is our national poet . He wrotes a lot of books in Farsi and URDU . Quaid Azam  was born in Sialkot ";
  var poet = essay.replace(/Quaid Azam/g, "Allama Iqbal");
  console.log(poet);
}
replaceAllMatch();

/*
 * Capitalize a sentence .
 * A string is converted to upper case with toUpperCase():
 *
 */

//  Example 1

function capitalize() {
  var smallSentence = "This is a sentence";
  var capitalOne = smallSentence.toUpperCase();
  console.log(capitalOne);
}

capitalize();

//  Example 2

function capitalize1() {
  var smallSentence1 = "convert these letters into capital";
  var capitalOne1 = smallSentence1.toUpperCase();
  console.log(capitalOne1);
}

capitalize1();

//  Example 3

function capitalize2() {
  var thisSentence = "This sentence is converted into capital words";
  var capitalSentence = thisSentence.toUpperCase();
  console.log(capitalSentence);
}

capitalize2();

/*  Converting the sentence into small letters
 * A string is converted to lower case with toLowerCase():
 */

//  Example 1

function smallLetter() {
  var CAPITALSENTENCE =
    "THIS IS CAPITAL SENTENCE BUT WILL BE CONVERTED INTO SMALL ALPHABHETS AFTER COMPILATION";
  var smallSentence = CAPITALSENTENCE.toLowerCase();
  console.log(smallSentence);
}

smallLetter();

//  Example 2
function smallLetter1() {
  var CAPITALSENTENCE1 =
    "I LIVE IN MINGORA . THESE ALL ARE IN SMALL LETTERS WHEN U COMPILE IT";
  var smallSentence1 = CAPITALSENTENCE1.toLowerCase();
  console.log(smallSentence1);
}

smallLetter1();

//  Example 3
function smallLetter3() {
  var CAPITALSENTENCE3 = "ALL PROPER NOUN SHOULD BE WRITTEN IN CAPITAL LETTERS";
  var smallSentence3 = CAPITALSENTENCE3.toLowerCase();
  console.log(smallSentence3);
}

smallLetter3();

/* String trim() method
 * trim() is a string method that is used to remove whitespace characters from the start and end of a string.
 * The trim() method does not change the value of the original string.
 */

function trimString() {
  var totn_string =
    "        This example is from techOnTheNet and here we will remove the first spaces.";
  var trimIs = totn_string.trim();
  console.log(trimIs);
}

trimString();
