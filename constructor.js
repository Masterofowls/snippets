// Basic Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Constructor with Private Variables
function Counter() {
  let count = 0; // Private variable
  this.increment = function() {
    return ++count;
  };
  this.getCount = function() {
    return count;
  };
}

// Constructor with Prototype Methods
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return `${this.name} makes a sound`;
};

// Factory Function Pattern
const createPerson = (name, age) => ({
  name,
  age,
  greet() {
    return `Hello, I'm ${name}`;
  }
});

// Constructor with Symbol Properties
function Wallet() {
  const _balance = Symbol('balance');
  this[_balance] = 0;
  this.getBalance = function() {
    return this[_balance];
  };
}

// ES6 Class Constructor
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }
}

// Singleton Pattern
const Singleton = (function() {
  let instance;
  
  function createInstance() {
    return {
      method: function() {
        return 'Singleton method';
      }
    };
  }
  
  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Constructor with Default Parameters
function Config(options = {}) {
  this.host = options.host || 'localhost';
  this.port = options.port || 8080;
  this.timeout = options.timeout ?? 5000;
}

// Constructor with Object.defineProperty
function User(name) {
  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },
    set: function(value) {
      name = value;
    },
    enumerable: true
  });
}
