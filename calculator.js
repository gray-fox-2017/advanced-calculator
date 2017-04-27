'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.total = num;
  }
  add (num=0) {
    this.total = this.total+num;
    return this
  }
  substract (num=0) {
    this.total = this.total-num;
    return this
  }
  multiply (num=1) {
    this.total = this.total*num;
    return this
  }
  divide (num=1) {
    this.total = this.total/num;
    return this
  }
  square (num = 2) {
    this.total = Math.pow(this.total,num);
    return this
  }
  squareRoot (num = 2) {
    this.total = Math.pow(this.total,1/num);
    return this
  }
  pi (){
    this.total = (22/7)*this.total
    return this
  }
  clear (){
    this.total = 0;
    return this
  }
}

let myCalculator = new Calculator();
myCalculator.add(1).substract(3).multiply(3).divide(-2).square(2).squareRoot(2).add(4).pi()//.clear()
console.log(myCalculator);

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
