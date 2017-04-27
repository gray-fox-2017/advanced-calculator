'use strict'

class Calculator {
  //write your code here
  constructor (mainNum) {
    this.result = mainNum;
  }
  add (num) {
    this.result += num;
    return this;
  }
  substract (num) {
    this.result -= num;
    return this;
  }
  multiply (num) {
    this.result *= num;
    return this;
  }
  divide (num) {
    this.result /= num;
    return this;
  }
  square () {
    this.result = Math.pow(this.result,2); 
    return this;
  }
  squareRoot () {
    this.result = Math.pow(this.result,0.5); 
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}

var calculate = new Calculator(2);
console.log (`The result of my calculation is: ${calculate.add(5).substract(2).multiply(20).divide(4).squareRoot().square().result}`);
