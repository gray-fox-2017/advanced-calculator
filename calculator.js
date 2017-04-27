'use strict'

class Calculator {
  //write your code here
  constructor (n1) {
    this.result = n1;
  }
  add (n=0) {
    this.result += n;
    return this;
  }
  substract (n=0) {
    this.result -= n;
    return this;
  }
  multiply (n=1) {
    this.result *= n;
    return this;
  }
  divide (n=1) {
    this.result /= n;
    return this;
  }
  square (n=1) {
    this.result = Math.pow(this.result,2)
    return this;
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
    return this;
  }
}


let aCalc = new Calculator (2);
console.log(aCalc.add(1).substract(1).multiply(2).divide(2).square(2).squareRoot().result);



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
