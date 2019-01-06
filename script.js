console.log("howdy partner");

// // Problem #1
// //tipleAdd(10)(20)(30) //returns 60

// function tripleAdd() {
//   return 10 + 20 + 30;
// }

// console.log(tripleAdd());

// //es6
// tripleAdd(() => 10 + 20 + 30);
// console.log(tripleAdd());

// //single function
// function tripleAdd1(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// console.log(tripleAdd1(10, 20, 30));

// //curried function (a function that take in arguments and returns a sequence of functions)

// function tripleAdd2(num1) {
//   return function(num2) {
//     return function(num3) {
//       return num1 + num2 + num3;
//     };
//   };
// }

// console.log(tripleAdd2(10)(20)(30));

// // Problem #2
// // what is an IIFE and why are they used? Give an example
// // It's an immediately invoked function express that's executed right after it's create. this creates/encapsulates a local scope so you're not overwriting global variables by accident
// (function doubleNumber(num) {
//   return num * 2;
// })(5);

// // Problem #3
// //what will be the alert when you click on button #5?
// //6 is the answer because the value of i will ++ after the last ineration of the for loop
// //to fix, you need an IIFY to preserve the value of i for the onClick event for every iteration
// //you can also just ise let instead of var bcasuse it is block scope and not function scope
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "Button " + i;
//     button.onclick = function() {
//       alert("This is button " + i);
//     };
//     body.appendChild(button);
//   }
// }

// createButtons();

// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "button" + i;
//     (function(num) {
//       button.onclick = function() {
//         alert("this is button #" + num);
//       };
//     })(i);
//     body.appendChild(button);
//   }
// }
// createButtons();

// //another solution is to just creat a seperate funtion for the onClick event to preserve the local scope of i at every iteration
// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "button" + i;
//     whenButtonClicked(button, i);
//     body.appendChild(button);
//   }
// }

// createButtons();

// function whenButtonClicked(button, num) {
//   button.onclick = function() {
//     alert("this is button #" + num);
//   };
// }

// // Problem #3
// //What is a closure, and code out an example of your own
// //it's an inner function that has access to vars of the inner, outer and global function, used to protect local scope

// const globalVariable = "global var";

// function outterFunc(param1) {
//   const variable1 = "var one";

//   function innerFunc(param2) {
//     const variable2 = "var two";

//     console.log("globalVariable: ", globalVariable);
//     console.log("variable1: ", variable1);
//     console.log("variable2: ", variable2);
//     console.log("param1: ", param1);
//     console.log("param2: ", param2);
//   }

//   innerFunc("param one");
// }

// outterFunc("param two");

// // Problem #4
// //What is the 'this' keyword and how is it used?
// //this referes to local object 'this' is in

// let house = {
//   price: 150000,
//   squareFeet: 2000,
//   owner: "John",
//   getPricePerSquareFoot: function() {
//     // return house.price / house.squareFeet;
//     return this.price / this.squareFeet;
//   }
// };

// console.log(house.price, house.getPricePerSquareFoot());

// // Problem #5
// //What is variable and function hoisting?
// //when they are executed or recognized at the top of the scope by the javasScript compiller (not defined yet though)

// // let color; //this is a psuedo view of what the compiller sees under the hood, and how it hoists

// // console.log(color); //with be undefined

// // color = "blue";

// // console.log(color); //will be blue

// //With a function declaration (one that's not assigined to a variable), the entire function will be hoisted vs a function expression that won't be

// console.log(foo(4, 4)); //function is hoisted
// console.log(addingNumbers(4, 4)); //entire function in the function expression not hoister

// function foo(num1, num2) {
//   return num1 + num2;
// }

// let addingNumbers = function foo(num1, num2) {
//   return num1 + num2;
// };

// //Variables and funcitons are hoisted to the top of the scope in which they are declared in (depending on the key word used (let and const are block scoped and var is function scoped))
// function getTotal() {
//   console.log(multiplier);
//   console.log(total);

//   let total = 0;

//   for (var i = 0; i < 10; i++) {
//     let valueToAdd = i;
//     var multiplier = 2;
//     total += valueToAdd * multiplier;
//   }

//   return total;
// }

// getTotal();

// // what JS does/see under the hood!

// function getTotal() {
//   let total;
//   var multiplier;

//   total = 0;

//   for (var i = 0; i < 10; i++) {
//     let valueToAdd;

//     valueToAdd = i;
//     multiplier = 2;
//     total += valueToAdd * multiplier;
//   }

//   return total;
// }

// getTotal();

// // Problem #6
// //what will print? blue, blue, underfined, underfined
// this.color = "Red";

// var myCar = {
//   color: "Blue",
//   logColor: function() {
//     var self = this; //purpose is to store a reference to certain scope
//     console.log("In logColor - this.color: " + this.color);
//     console.log("In logColor - self.color: " + self.color);
//     (function() {
//       console.log("In IIFE - this.color: " + this.color); //has no function reference but still referes to the global scope
//       console.log("In IIFE - self.color: " + self.color);
//     })();
//   }
// };

// myCar.logColor();

// Problem #7
// == vs ===
// === is more strict and compare data types, and == converts data into the same type and then compares

// //Problem #8
// // What is logged to the console when the logNumber function is ran?
// //underfined becasue num has been hoisted but no value is assigned yet. If the 2nd num var is deleted, the fuinction will return 50 becuase it will look to the parent for scope
// var num = 50;

// function logNumber() {
//   console.log(num);
//   var num = 100;
// }

// logNumber();

// //Problem #9
// //'use strict' what does it do and why use it
// //enforces stricter parsing and error handling in my code (helps with debugging when you have to var, const, let). Allows us to fail fast and fail loudly

// // city = "London"; //declared global variable without using var, let or const
// // console.log(city);

// ("use strict");
// city = "London"; //now returns undefined because it limits the create of global variable
// console.log(city);

//Problem #10
//Curry this function:
// function getProduct(num1, num2) {
//   return num1 * num2;
// }

function getProducts(num1) {
  return function(num2) {
    return num1 * num2;
  };
}

getProducts(10)(20);

//other things you can do with currying
function getTravelTime(distance, speed) {
  return distance / speed;
}

console.log(getTravelTime(100, 60));

//curried:
function getTravelTime(distance) {
  return function(speed) {
    return distance / speed;
  };
}

const travelTimeToDCtoNYC = getTravelTime(450); // distance doesn't change so this is set
console.log(travelTimeToDCtoNYC(60)); // you can then just make adjustments to speed without having to type distance over and over again
console.log(travelTimeToDCtoNYC(80));
