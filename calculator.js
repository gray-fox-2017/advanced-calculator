'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.value = 0;
  }
  add (number) {
    this.value += number;
    return this;
  }
  substract (number) {
    this.value -= number;
    return this;
  }
  multiply (number) {
    this.value *= number;
    return this;
  }
  divide (number) {
    this.value /= number;
    return this;
  }
  square () {
    this.value = Math.pow(this.value, 2)
    return this;
  }
  squareRoot () {
    this.value = Math.sqrt(this.value);
    return this;
  }
  showResult (){
    console.log(this.value);
    return this;
  }
  clear (){
    this.value = 0;
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
let calculator = new Calculator();

calculator.add(5).substract(2).multiply(2).divide(2).square().squareRoot().showResult();

module.exports = {
  Calculator
}
