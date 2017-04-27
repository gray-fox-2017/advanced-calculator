'use strict'

class Calculator {
  //write your code here
  constructor (number = 1) {
    this.data = number;
  }
  add (number) {
    this.data += number;
    return this;
  }
  substract (number) {
    this.data -= number;
    return this;
  }
  multiply (number) {
    this.data *= number;
    return this;
  }
  divide (number) {
    this.data /= number;
    return this;
  }
  square () {
    this.data = Math.pow(this.data, 2);
    return this;
  }
  squareRoot () {
    this.data = Math.sqrt(this.data);
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
