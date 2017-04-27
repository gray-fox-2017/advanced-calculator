'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num = num;
  }
  add (value) {
    this.num+=value
    return this
  }
  substract (value) {
    this.num-=value
    return this
  }
  multiply (value) {
    this.num*=value
    return this
  }
  divide (value) {
    this.num=this.num/value
    return this
  }
  square (value) {
    this.num=Math.pow(this.num, value)
    return this
  }
  squareRoot () {
    this.num=Math.sqrt(this.num)
    return this
  }
  ballSum () {
    this.num=(this.num*this.num)*Math.PI
    return this
  }
  equalsTo () {
    console.log(this.num);
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calc = new Calculator()

calc.add(12).substract(2).multiply(4).divide(2).square(2).squareRoot().ballSum().equalsTo();

module.exports = {
  Calculator
}
