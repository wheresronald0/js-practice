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

// Problem #4
//What is the 'this' keyword and how is it used?
//this referes to local object 'this' is in

let house = {
  price: 150000,
  squareFeet: 2000,
  owner: "John",
  getPricePerSquareFoot: function() {
    // return house.price / house.squareFeet;
    return this.price / this.squareFeet;
  }
};

console.log(house.price, house.getPricePerSquareFoot());
