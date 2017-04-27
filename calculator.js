'use strict'

class Calculator {
  //write your code here
  constructor (angka=4) {
    this.angka=angka
  }
  add () {
    this.angka+=2;
    return this
  }
  substract () {
    this.angka-=1;
    return this
  }
  multiply () {
    this.angka*=2;
    return this
  }
  divide () {
    this.angka/=1;
    return this
  }
  square () {
    this.angka=Math.pow(this.angka,2);
    return this
  }
  squareRoot () {
    return Math.sqrt(this.angka);
  }
}
var angka = new Calculator();
console.log(angka.add().substract().multiply().divide().square().squareRoot());
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
