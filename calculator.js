'use strict'

class Calculator {
  //write your code here
  constructor (input = 1) {
    this.input = input
  }
  add (num) {
    this.input += num
    return this
  }
  substract (num) {
    this.input -= num
    return this
  }
  multiply (num) {
    this.input *= num
    return this
  }
  divide (num) {
    this.input /= num
    return this
  }
  square (num) {
    this.input = Math.pow(this.input,num)
    return this
  }
  squareRoot () {
    this.input = Math.sqrt(this.input)
    return this
  }
  equal(){
    console.log(this.input)
  }
}

let calculate = new Calculator
calculate.add(2).substract(1).multiply(11).divide(2).square(2).squareRoot().equal()

module.exports = {
  Calculator
}
