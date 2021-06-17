//  Traversing the DOM

// Assigning UL to the variable
var itemList = document.querySelector("#items");

// //  parent Node property
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// //  Chain of the parent node to access the top level Node
// console.log(itemList.parentNode.parentNode);

//  parent Element
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = "#f4f4f4";

// //  Chain of the parent node to access the top level Node
// console.log(itemList.parentElement.parentElement);

//  Child Nodes
//  It giver us collection of child with also blank white spaces
// console.log(itemList.childNodes);

//  Children
//  It giver us collection of child without blank white spaces
// console.log(itemList.children);

//   First child
// It will give us the first text which is blank space
// console.log(itemList.firstChild);

//   First Element Child
// It will give us the first li which is Element
// console.log(itemList.firstElementChild);

//  Last child

// console.log(itemList.lastChild);

//  Last Element Child

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = "yellow";
// itemList.lastElementChild.style.color = "blue";

//  Siblings
//           NextSibling
// console.log(itemList.nextSibling);

//  nextElementSibling
//  This will give us null as we have no next sibling after items in html file

// console.log(itemList.nextElementSibling);

//           Previous sibling
// console.log(itemList.previousSibling);

//          PreviousElement sibling
// console.log(itemList.previousElementSibling);

// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.backgroundColor = "yellow";

// itemList.previousElementSibling.style.color = "#f4f4f4";
// itemList.previousElementSibling.style.backgroundColor = "#289672";
// itemList.parentElement.style.backgroundColor = "#29bb80";
