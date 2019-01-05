console.log("howdy partner");

// Problem #1
//tipleAdd(10)(20)(30) //returns 60

function tripleAdd() {
  return 10 + 20 + 30;
}

console.log(tripleAdd());

//es6
tripleAdd(() => 10 + 20 + 30);
console.log(tripleAdd());

//single function
function tripleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(tripleAdd1(10, 20, 30));

//couried function

function tripleAdd2(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(tripleAdd2(10)(20)(30));
