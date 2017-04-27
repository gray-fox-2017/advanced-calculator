'use strict'

class Calculator {
  //write your code here
  constructor (value) {
    this.value = value;
  }
  add (x = 0) {
    this.value = this.value + x;
    return this;
  }
  substract (x = 0) {
    this.value = this.value - x;
    return this;
  }
  multiply (x = 1) {
    this.value = this.value * x;
    return this;
  }
  divide (x = 1) {
    this.value = this.value /  x;
    return this;
  }
  square () {
    this.value = this.value * this.value;
    return this;
  }
  mathPow(x = 1){
    this.value = Math.pow(this.value, x);
    return this;
  }
  squareRoot (x = this) {
    return Math.sqrt(x);
  }
  CircleArea (x = 1){
    return Math.PI*x*x;
  }
  print(){
    console.log(this.value)
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
