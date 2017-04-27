'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0;
  }
  add (number) {
    this.number += number;
    return this
  }
  substract (number) {
    this.number -= number;
    return this
  }
  multiply (number) {
    this.number *= number;
    return this
  }
  divide (number) {
    this.number /= number;
    return this
  }
  square (number =2) {
    this.number = Math.pow(this.number,number)
    return this
  }
  squareRoot (number) {
    this.number = Math.sqrt(this.number,number)
    return this
  }
  getCircleArea(r) {
    this.number = Math.PI * r * r;
    return this
  }
  clear() {
    this.number = 0;
    return this
  }
  print() {
    console.log(this.number);
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
