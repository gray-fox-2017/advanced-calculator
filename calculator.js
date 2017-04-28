'use strict'

class Calculator {
  //write your code here
  constructor (num1 = 1) {
    this.Num1 = num1;
  }
  add (x) {
    this.Num1 = this.Num1 + x;
    return this;
  }
  substract (x) {
    this.Num1 = this.Num1 - x;
    return this;
  }
  multiply (x) {
    this.Num1 = this.Num1 * x;
    return this;
  }
  divide (x) {
    this.Num1 = this.Num1 / x;
    return this;
  }
  square () {
    this.Num1 = Math.pow(this.Num1,2);
    return this;
  }
  squareRoot () {
    this.Num1 = Math.sqrt(this.Num1);
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
