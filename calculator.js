'use strict'

class Calculator {
  //write your code here
  constructor (param1 = 1) {
    this.param1 = param1;
  }
  add (number1) {
   this.param1 = this.param1 + number1;
    return this;
  }
  substract (number1) {
    this.param1 = this.param1 - number1;
    return this;
  }
  multiply (number1) {
    this.param1 = this.param1 * number1;
    return this;
  }
  divide (number1) {
    this.param1 = this.param1 / number1;
    return this;
  }
  square () {
   this.param1 = Math.pow(this.param1,2);
   return this;
  }
  squareRoot () {
     this.param1 = Math.sqrt(this.param1);
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

let cal = new Calculator();

// cal.add().substract().multiply().divide().square().squareRoot();
console.log(cal.add().substract().multiply().divide().square().squareRoot());


module.exports = {
  Calculator
}
