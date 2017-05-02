'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.num = number;
  }
  add (n=0) {
    this.num += n;
    return this
  }
  substract (n=1) {
    this.num -= n;
    return this
  }
  multiply (n=1) {
    this.num *= n;
    return this
  }
  divide (n=1) {
    this.num /= n;
    return this
  }
  square (n=1) {
    this.num = Math.pow(this.num, n)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }
  circleArea(){
    this.num = Math.PI*Math.pow(this.num, 2)
    return this
  }
  result() {
    return this.num
  }
}

let myCalculator = new Calculator(2);

console.log(myCalculator.add(5).substract(2).multiply(4).divide(4).square(4).squareRoot().circleArea().result())
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
