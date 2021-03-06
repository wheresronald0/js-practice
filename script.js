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
// //6 is the answer because the value of i will ++ after the last iteration of the for loop
// //to fix, you need an IIFY to preserve the value of i for the onClick event for every iteration
// //you can also just ise let instead of var because it is block scope and not function scope
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

// //another solution is to just creat a separate function for the onClick event to preserve the local scope of i at every iteration
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

// function outerFunc(param1) {
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

// outerFunc("param two");

// // Problem #4
// //What is the 'this' keyword and how is it used?
// //this references to local object 'this' is in

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

// //Variables and functions are hoisted to the top of the scope in which they are declared in (depending on the key word used (let and const are block scoped and var is function scoped))
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
// //what will print? blue, blue, undefined, undefined
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

// //Problem #10
// //Curry this function:
// // function getProduct(num1, num2) {
// //   return num1 * num2;
// // }

// function getProducts(num1) {
//   return function(num2) {
//     return num1 * num2;
//   };
// }

// getProducts(10)(20);

// //other things you can do with currying
// function getTravelTime(distance, speed) {
//   return distance / speed;
// }

// console.log(getTravelTime(100, 60));

// //curried:
// function getTravelTime(distance) {
//   return function(speed) {
//     return distance / speed;
//   };
// }

// const travelTimeToDCtoNYC = getTravelTime(450); // distance doesn't change so this is set
// console.log(travelTimeToDCtoNYC(60)); // you can then just make adjustments to speed without having to type distance over and over again
// console.log(travelTimeToDCtoNYC(80));

// //Problem #11
// //write a function that keeps track for how may times it was called, and returns that number

// function myFunc() {
//   let count = 0;

//   return function() {
//     count++;
//     return count;
//   };
// }
// console.log(myFunc());

// const instanceOne = myFunc(); //you have to make an instance for the count to be tracked
// const instanceTwo = myFunc();

// console.log("instance 1: ", instanceOne());
// console.log("instance 1: ", instanceOne());
// console.log("instance 1: ", instanceOne());
// console.log("instance 2: ", instanceTwo());
// console.log("instance 2: ", instanceTwo());
// console.log("instance 2: ", instanceTwo());

// //Problem #11
// //what is the value of x and y when logged out?
// // y logs to 200 because of it's global scope, but x is undefined because of it's IIFE function scope
// (function() {
//   var x = (y = 200);
//   // var x = y IIFE scope
//   // y = 200 /global scope
// })();

// console.log("y: ", y);
// console.log("x: ", x);

// //Problem #11
// //Describe the JS call() and apply() methods (how do they function, what arguments do they take, and how are they different?)
// //basically the same thing and both use another objects method, but apply passes the aurguments in via array

// const car1 = {
//   brand: "Porsche",
//   getCarDescription: function(cost, year, color) {
//     console.log(
//       `This car is a ${
//         this.brand
//       }. The price is $${cost}. The year is ${year}. The color is ${color}.\n`
//     );
//   }
// };

// const car2 = {
//   brand: "Lamborghini"
// };

// const car3 = {
//   brand: "Ford"
// };

// car1.getCarDescription(80000, 2010, "blue");
// car1.getCarDescription.call(car2, 200000, 2013, "yellow");
// car1.getCarDescription.apply(car3, [35000, 2012, "black"]);

// //Problem #12
// //what will be logged out?
// //1,2,3,4,5,6,7,8, passing by reference, referencing the same array value (same peice of data)

// // const list1 = [1, 2, 3, 4, 5];
// // const list2 = list1;

// // list1.push(6, 7, 8);

// // console.log(list2);

// //make a list that's equla to list1 but isn't affected by changes to list one
// const list1 = [1, 2, 3, 4, 5];
// // const list2 = list1.slice();// or use .concat:
// const list2 = list1.concat([]);
// list1.push(6, 7, 8);
// console.log(list1);
// console.log(list2);

// //Problem #13
// // get total with single(singly) invocation and double(doubly) invocation (currying)
// // function getTotal(num1) {
// //   return function(num2) {
// //     return num1 + num2;
// //   };
// // }

// // getTotal(10, 20);
// // getTotal(10)(20);

// //if you wanted a function that handle both:
// function getTotal() {
//   var args = Array.prototype.slice.call(arguments); // arguments is an object that acts like an array
//   console.log(args);

//   if (args.length === 2) {
//     return args[0] + args[1];
//   } else if (args.length === 1) {
//     return function(num2) {
//       return args[0] + num2;
//     };
//   }
// }
// console.log(getTotal(10, 20));
// console.log(getTotal(10)(20));

// //Problem #14
// //Describe what JSON format is: JSON "javascript object notation" is a simplistic lightweight format for data transfer
// //Delete the data types not permitted in JSON.
// //Replace placeholder-text with the corresponding data type, properly formatted as JSON.

// // prettier-ignore
// const myJsonObj = { //all keys are strings
//   "myString": "my name", //must be double quotes
//   "myNumber": 2,
//   "myNull": null,
//   "myBoolean": false,
//   // myUndefined: [undefined], //undefined not allowed
//   "myArray": [1, 3, 3],
//   // myFunction: [some function], //no functions allowed as it's not a computing language
//   "myObject": {
//     "myNumber": 3
//   }
// };

// //Problem #15
// //when this code is ran, what order will the four numbers be logged out in?
// //1,4,3,2
// function logNumbers() {
//   console.log(1);
//   setTimeout(function() {
//     //this goes into the event loop que (click event Ajax calls)
//     console.log(2);
//   }, 1000);
//   setTimeout(function() {
//     //this goes into the event loop que
//     console.log(3);
//   }, 0);
//   console.log(4);
// }

// logNumbers();

// //Problem #16
// //List and decribe 3 different ways of creating an object in JS
// //onbject literal syntax - assign it to a var
// const foo = {
//   name: "Bar"
// };
// console.log(foo);
// // new keyword and Object constructor
// const student = new Object(); //then you can just declare KVP's
// student.name = "john";
// student.age = 12;
// student.classes = ["english", "algebra"];
// student.getClasses = function() {
//   return this.classes;
// };
// console.log(student);
// console.log(student.getClasses());

// //the 3rd way is through a constructor:
// function Car(make, model, color) {
//   this.make = make;
//   this.model = model;
//   this.color = color;
//   // this.getColor = function() {
//   //   return this.color;
//   //};
// }
// Car.prototype.getColor = function() {
//   return this.color;
// };

// const ronsCar = new Car("honda", "civic", "blue");
// console.log(ronsCar);
// console.log(ronsCar.getColor());

// //Problem #17
// //what is logged out for each? obj, underfined, obj, obj (basically everything in JS is an obj except for undefined)
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {});
// console.log(typeof []);

// //what if we wanted to find out if something was an array (typeof won't tell us, becasue an array is an obj):
// console.log(Array.isArray([]));
// console.log({} instanceof Array);

// //Problem #18
// //descripe what the bind method is, and what parameters it uses
// //it's a way to bind an instance to an object scope vs global scope
// this.distance = 10000;
// const roadTrip1 = {
//   distance: 3000,
//   getDistance: function(unit, caption) {
//     return this.distance + unit + caption;
//   }
// };

// const roadTrip2 = {
//   distance: 5000
// };

// const getTripDistance = roadTrip1.getDistance.bind(roadTrip2, "km"); //you can pass in additional arguments as static, or pass them in when you call the funtion as dynamic

// console.log(getTripDistance(" in total"));

// //Problem #19
// //what is logged out, true or false
// //false for both because both user reference different instance of an object and can never be equal even though the data value is the same
// const user1 = {
//   name: "Jordan",
//   age: 28
// };

// // const user2 = {
// //   name: 'Jordan',
// //   age: 28,
// // };

// const user2 = user1; //would be true true becuase both user are now refering to the same object!
// console.log(user1 == user2);
// console.log(user1 === user2);
// console.log(JSON.stringify(user1) === JSON.stringify(user2)); //converts it to a JSON object and then to a string to compare values and not references

// //array would retunr false too because it's an object and you're referencing different instances in this example
// console.log([] === []);
// console.log(JSON.stringify([]) === JSON.stringify([]));

// //Problem #20
// //what is logged out for each
// var arr1 = []; //jsut return the empy array
// var arr2 = new Array(50); //because it's on numer, it returns a array with 50 empty spots. If it was one string it would return an array with that one string
// var arr3 = new Array(1, 2, "three", 4, "five");
// var arr4 = new Array([1, 2, 3, 4, 5]); //returns nested array

// console.log("arr1: ", arr1);
// console.log("arr2: ", arr2);
// console.log("arr3: ", arr3);
// console.log("arr4: ", arr4);

// //Problem #21
// //what looges out?

// console.log([10, 20, 30, 40, 50].indexOf(30));
// console.log([{ name: "Pam" }, { name: "Kent" }].indexOf({ name: "Kent" })); //-1 becasue objects are passed by reference and not by value, so it can't find the "Kent" object in the array
// console.log("hello world".indexOf("o")); //4 - this is the strin indexof and not the array in
// console.log([[1], [2], [3], [4]].indexOf([2])); //-1 beacuse two different arrays are never the same

// const myArray = [5];
// const anotherArray = myArray;
// console.log([[1], [2], [3], [4], myArray].indexOf(myArray)); //4 becasue now were referencing the same underlying object, so they're equal
// console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray)); //4 becasue now were referencing the same underlying object, so they're equal

// //Problem #22
// //is it true or false
// console.log(900.9 === 300.3 * 3); //false because JS calculates decimals strange and rounds the last digit up/down
// //on fix would be... fix the decimal to 2 places and use the built in "number function" to convert back toa number, since toFixed convert it to a string
// console.log(900.9 === Number((300.3 * 3).toFixed(2)));
// //tiPrecision is the same as toFixed and converts to a string
// console.log(900.9 === Number((300.3 * 3).toPrecision(12)));
// //you can also muliply by 10 and then divide the answer by 10
// console.log(900.9 === (300.3 * 10 * 3) / 10);

// //Problem #23
// //What is logged?
// var string1 = "Tampa";
// var string2 = string1;
// string1 = "Venice";

// console.log(string2); //tampa bescuase strings pass value, and the vlaue had already been set

// ////////////////////////////////

// var person1 = {
//   name: "Alex",
//   age: 30
// };

// var person2 = person1;

// person2.name = "Kyle";

// console.log(person1); //Kyle and 30 because they are both now referencing the same object

// //Problem #24
// //what will be looged?
// //return an array containing smith
// const data1 = "Jordan Smith";

// const data2 = [].filter.call(data1, function(elem, index) {
//   //calback function that all filter methods have, with element and index arguments
//   //Accessing the array method this way ([].filter) is the same as using Array.prototype.filter
//   return index > 6; //evaluating for true/false- if it evaulates to tru it's placed in the new array
// });

// // only use 'read-only' methods: filter, forEach, map, some, every, etc.
// // cannot use: push, pop, splice, shift, reverse, etc.

// console.log(data2);

// //Problem #25
// //what's logged out?
// //400- it's wonkey but the b object is being converted to string '[object, object] (a key can only be a string)
// const a = {};
// const b = { name: "b" };
// const c = { name: "c" };

// a[b] = 200;
// a[c] = 400;

// console.log(a[b]);
// console.log(a);

// //Problem #26
// //what's looged?
// //10 because the x function is hoisted and negates x's (in the y function) global scope and keeps it's funtion scope
// var x = 10;

// function y() {
//   x = 100;
//   return;
//   function x() {}
// }

// y();

// console.log(x);

//Problem #27
//what will be looged out?
const account1 = {
  name: "Jen",
  totalAmount: 5000,
  deductAmount: function(amount) {
    this.totalAmount -= amount;
    return "Amount in account: " + this.totalAmount;
  }
};

const account2 = {
  name: "James",
  totalAmount: 8000
};

const withdrawFromAccount = function(amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)()); //7500
console.log(withdrawFromAccount(200)()); //7300 because the value is stored as 7500 and no loger 7800
