'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator();
calculator.add(10).substract(2).print(); // 10-2 = 8
calculator.multiply(4).divide(2).print(); // 4 /2 = 2
calculator.square(16).print();  // akar 16 = 4
calculator.getCircleArea(5).print();
calculator.squareRoot(5).print();
calculator.add(10).divide(5).print();
