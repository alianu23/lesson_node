//module
// const multipleTwoTimes = require("./math");
//default import
const { plus, minus, multiple, divide, power, squareRoot } = require("./math");
//named import

console.log("math");
//es5 => es6
//module
const num1 = 90;

console.log("Plus", plus(num1));
console.log("Minus", minus(num1));
console.log("Multiple", multiple(num1));
console.log("Divide", divide(num1));
console.log("Power", power(num1));
console.log("SquareRoot", squareRoot(num1));
