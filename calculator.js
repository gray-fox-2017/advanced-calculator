'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.result = num;
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
    if (n === 0) {
      return false;
    } else {
      this.result /= n;
      return this;
    }
  }
  square (n=2) {
    this.result = Math.pow(this.result, n);
    return this;
  }
  squareRoot (n=this.result) {
    this.result = Math.sqrt(n);
    return this;
  }
  result () {
    return this.result;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// let calc = new Calculator(5);
// console.log(calc)
// console.log(calc.add(2).square(2).result);
// console.log(calc);

module.exports = {
  Calculator
}
