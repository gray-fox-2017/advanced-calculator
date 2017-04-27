'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.angka = angka;
  }
  add ( n = 0) {
    this.angka += n;
    return this;
  }
  substract ( n = 0 ) {
    this.angka -= n;
    return this;
  }
  multiply ( n = 1 ) {
    this.angka *= n;
    return this;
  }
  divide ( n = 1 ) {
    this.angka /= n;
    return this;
  }
  square () {
    this.angka *= this.angka;
    return this;
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka);
    return this;
  }
  circleArea () {
    this.angka = Math.PI * this.square().angka;
    return this;
  }
}

let hitung = new Calculator(10);

// console.log(hitung.add(3).substract(4).multiply(2).divide(3).square().squareRoot().angka)

// console.log(hitung.add(3).multiply(3).angka);

console.log(hitung.circleArea().angka)
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
