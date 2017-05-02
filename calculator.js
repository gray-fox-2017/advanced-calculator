'use strict'

class Calculator {
  //write your code here
  constructor (num = 1) {
    this.hasil = num
  }
  add (num) {
    this.hasil += num
    return this
  }
  substract (num) {
    this.hasil -= num
    return this
  }
  multiply (num) {
    this.hasil *= num
    return this
  }
  divide (num) {
    this.hasil /= num
    return this
  }
  square () {
    this.hasil =  Math.pow(this.hasil, 2)
    return this
  }
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil)
    return this
  }
  result() {
    return this.hasil
  }
}
let tes = new Calculator(1)
console.log(tes.add(2).substract(2).multiply(3).divide(1).square().squareRoot().result());


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
