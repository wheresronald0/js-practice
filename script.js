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

// Problem #3
//what will be the alert when you click on button #5?
//6 is the answer because the value of i will ++ after the last ineration of the for loop
//to fix, you need an IIFY to preserve the value of i for the onClick event for every iteration
//you can also just ise let instead of var bcasuse it is block scope and not function scope
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "Button " + i;
    button.onclick = function() {
      alert("This is button " + i);
    };
    body.appendChild(button);
  }
}

createButtons();

function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "button" + i;
    (function(num) {
      button.onclick = function() {
        alert("this is button #" + num);
      };
    })(i);
    body.appendChild(button);
  }
}
createButtons();

//another solution is to just creat a seperate funtion for the onClick event to preserve the local scope of i at every iteration
function createButtons() {
  for (var i = 1; i <= 5; i++) {
    var body = document.getElementsByTagName("BODY")[0];
    var button = document.createElement("BUTTON");
    button.innerHTML = "button" + i;
    whenButtonClicked(button, i);
    body.appendChild(button);
  }
}

createButtons();

function whenButtonClicked(button, num) {
  button.onclick = function() {
    alert("this is button #" + num);
  };
}
