// 1. Properties for the Document object

//  This will show all the method and properties of the document .

// console.dir(document);

//  It will give us domain
// console.log(document.domain);

// //  It will give us URL
// console.log(document.URL);

// //  It will give us title
// console.log(document.title);

// //  It wil change the title on the tab
// document.title = "New title";

// //  It will give us Doctype
// console.log(document.doctype);

// //  It will give us head
// console.log(document.head);

// //  It will give us body
// console.log(document.body);

// //  It will give us HTMl collection
// console.log(document.all);

// //  It will give us the content on the index 10.
// console.log(document.all[10]);

// It will change the heading into My WebPage
// document.all[10].textContent = "My webpage";

//  The upper method for changing is not correct as when we add something to the document so the index will be change.

//  This will give us the form
// console.log(document.forms);

// This will give us all the links of the page
// console.log(document.links);

// This will give us all the images collection
// console.log(document.images);

//  2. Selectors and selecting methods

//                   getElementById Method

// console.log(document.getElementById("header-title"));

// var header = document.getElementById("header-title");

// console.log(header);

//  This will not focus on the styling
// header.textContent = "hello";

//  This will  focus on the styling
// header.innerText = "GoodBye";

//  It will make h3 tag inside the h1
// header.innerHTML = "<h3>Advance </h3>";

// This will make the variable header from the top heading and then we will change the style of the border bottom

// var header = document.getElementById("main-header");

// header.style.borderBottom = " 4px solid black";

//                    getElementsByClassName

// var items = document.getElementsByClassName("list-group-item");
// // console.log(items);

// // Printing the second  item
// console.log(items[1]);

// //  Changing the value of the second item
// items[1].textContent = "Second List Item";

// Changing the background Color Of the second value

// // items[1].style.backgroundColor = "yellow";

// // For the whole items background color we will use loop.

// for (i = 0; i <= items.length; i++) {
//   items[i].style.backgroundColor = "grey";
//   items[i].style.color = "White";
// }

// //               getElementByTagname;
// var li = document.getElementsByTagName("li");
// // console.log(li[2]);
// // li[2].textContent = "Item no 3 is not available";
// for (listItem = 0; listItem <= li.length; listItem++) {
//   //   console.log(listItem);
//   li[listItem].style.backgroundColor = "#114e60";
//   li[listItem].style.color = "#f4eee8";
// }

//  This is styling of h2 which are 2 in numbers USING getElementByTagname
var itemHeader = document.getElementsByTagName("h2");
// console.log(itemHeader);
itemHeader[1].textContent = "My Items List";
itemHeader[1].style.backgroundColor = "#114e60";
itemHeader[1].style.color = "#f4eee8";
itemHeader[1].style.padding = "20px";
itemHeader[1].style.borderRadius = "20px";
itemHeader[1].style.textAlign = "center";
itemHeader[0].style.textAlign = "center";
itemHeader[0].style.color = "#114e60";
itemHeader[0].style.textTransform = "uppercase";

// Query Selecetor

// Using id in query selector
var header = document.querySelector("#main-header");
header.style.borderBottom = "4px solid black";
header.style.backgroundColor = "#114e60 ";

//  using tag in query selector
var input = document.querySelector("input");
// input.value = "Hello";
input.placeholder = "Filter";

// //  using class in query selector

// var button = document.querySelector(".myBtn");
// button.style.padding = "10px";
// button.style.backgroundColor = "#114e60";
// button.style.color = "#f0e3ca";
// console.log(button);
