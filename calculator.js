'use strict'

class Calculator {
  //write your code here
  constructor (x) {
    this.angka = x;
  }
  add (y = 0) {
    this.angka += y
    return this
  }
  substract (y = 0) {
    this.angka -= y
    return this
  }
  multiply (y = 1) {
    this.angka *= 1
    return this
  }
  divide (y = 1) {
    this.angka /= y
    return this
  }
  square (y = 2) {
    this.angka = Math.pow(this.angka, y)
    return this
  }
  squareRoot (y = 2) {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  hasil () {
    return `Hasilnya : ${this.angka}`
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
var bilangan = new Calculator(3);

console.log(bilangan.square(2).squareRoot().add(5).substract(2).hasil());


module.exports = {
  Calculator
}
