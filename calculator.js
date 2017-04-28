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
  equal () {
    console.log(this.angka)
  }
}

let hitung = new Calculator(10);

hitung.add(3).substract(4).multiply(2).divide(3).square().squareRoot().equal()


module.exports = {
  Calculator
}
