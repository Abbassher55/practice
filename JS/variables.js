/*
 *
 * Javascript variables.
    * variable definition
    * Declaration keyword.
    * variable scopes.
    * when and why to use [let, var,const]. 
    * example scenario.
 */

/* Example programe */

var age = 24;
//let name = 'test';
const pi = 3.18;
var name;
var myName;

function test() {
  // name = "What is your name";
  myName="My name is Abbas";
  //console.log(name);
}

// test();

// console.log(myName);

/* 
  *Ther are three keywords use for declaring variables in javascript
  * var
  * let
  * contstant
  

  *let see each of these with example 

  1. Declaration with var

 */

    var myName="Abbas";
    console.log("My name is " + myName);

    var salary= 2145.45;
    console.log("My salary is " + salary);

//  let take another ecxample and change the value of variables

var stdName= "Ahmad";

console.log("first name " + stdName);

/*
    if we want to chane the value of stdName here 
    we have no need to write var as the vareiable is already declared
    The given programe will print first name and second name which will be different from each other.

  * Short hand for creating variables  
    * var firstName, lastName , address ; this will declare three variables 
  */

  
stdName = "Ali"
console.log("Second name "+ stdName)


/* Declaring variable with let 
  
  *  we can declare variable with ( let variablName = something; )
  * The diffence between let and var is in the scope
  * var is used for global scope while let variables are scoped to the immediate enclosing block denoted by { }
  *  Also we cannot use the same name with let and can use with the var to change its value
  * 
  * Examples
  * s
  * var name = "Ali" ;
  * var name = "Ahmad" ;   for accessing this the secong value will be printed
  * 
  * let name = "Ali" ;
  * let name = "Ahmad" ;  This will show us error
*/

  let firstName ="Ahmad";
  console.log(firstName);

  let secondName = "Khan";
  // let secondName ="Ali";  // here it will give error
  console.log(secondName);



  //  Const keyword is used for contsant values 

  const namaz = 5;
  // const namaz = 5; // here we will have error because the value of const cannot be change.
  console.log("There are " +namaz+ " prayers In a day");