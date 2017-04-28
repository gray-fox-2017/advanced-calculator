'use strict'

class Calculator {
  //write your code here
  constructor (angka=4) {
    this.angka=angka
  }
  add (param) {
    this.angka+=param;
    return this
  }
  substract (param) {
    this.angka-=param;
    return this
  }
  multiply (param) {
    this.angka*=param;
    return this
  }
  divide (param) {
    this.angka/=param;
    return this
  }
  square (param) {
    this.angka=Math.pow(this.angka,param);
    return this
  }
  squareRoot () {
    this.angka=Math.sqrt(this.angka);
    return this
  }

  display(){
    return this.angka;
  }
}
var angka = new Calculator();
console.log(angka.add(2).substract(1).multiply(3).divide(2).square(2).squareRoot().display());
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
