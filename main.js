'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator(3);
console.log(calc.add(3).substract(5).multiply(7).value);
console.log(calc.squareRoot(16));
console.log(calc.CircleArea(4));
