'use strict'

const {Calculator} = require("./calculator.js")
// import Calculator from "./calculator.js"


// execute function on calculator.js in here
let calc = new Calculator(5);

console.log(calc.add(2).multiply(6).substract(7).square(2).squareRoot().divide(7).result);

// console.log(Calculator);
