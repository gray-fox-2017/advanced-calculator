'use strict'

class Calculator {
  //write your code here
  constructor (AngkaPertama) {
    this.AngkaPertama = AngkaPertama;
  }
  add (angkaTambah=0) {
    this.AngkaPertama += angkaTambah;
    return this;
  }
  substract (angkaKurang = 0) {
    this.AngkaPertama -= angkaKurang;
    return this;
  }
  multiply (angkaKali = 1) {
    this.AngkaPertama *= angkaKali;
    return this;
  }
  divide (AngkaBagi = 1) {
    this.AngkaPertama /= AngkaBagi;
    return this;
  }
  square (AngkaSquare = 1) {
      this.AngkaPertama = Math.pow(this.AngkaPertama,2);
      return this;
  }
  squareRoot () {
      this.AngkaPertama = Math.sqrt(this.AngkaPertama);
      return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let menghitung = new Calculator(10);

console.log(menghitung.square(10).AngkaPertama);

module.exports = {
  Calculator
}
