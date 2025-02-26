// JavaScript Classes Advanced Cheatsheet

// Basic Class Declaration
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return `${this.name} makes a sound`;
  }
}

// Class Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }
  
  speak() {
    return `${this.name} barks!`; // Method overriding
  }
}

// Static Methods & Properties
class Calculator {
  static PI = 3.14159;
  
  static add(x, y) {
    return x + y;
  }
}

// Private Fields & Methods
class BankAccount {
  #balance = 0; // Private field
  
  #validateAmount(amount) { // Private method
    return amount > 0;
  }
  
  deposit(amount) {
    if (this.#validateAmount(amount)) {
      this.#balance += amount;
    }
  }
}

// Getters & Setters
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
}

// Mixin Example
const speakMixin = {
  speak() {
    return `${this.name} is speaking`;
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Person.prototype, speakMixin);

// Abstract Class Pattern
class AbstractVehicle {
  constructor() {
    if (new.target === AbstractVehicle) {
      throw new Error('Cannot instantiate abstract class');
    }
  }
  
  start() {
    throw new Error('Method must be implemented');
  }
}

// Class Fields (Public & Private)
class Product {
  name = ''; // Public field
  #price = 0; // Private field
  static category = 'general'; // Static field
  
  constructor(name, price) {
    this.name = name;
    this.#price = price;
  }
}

// Method Chaining
class StringBuilder {
  constructor() {
    this.content = '';
  }
  
  append(str) {
    this.content += str;
    return this;
  }
  
  clear() {
    this.content = '';
    return this;
  }
}
