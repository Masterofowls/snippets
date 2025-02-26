// Object Creation
const obj1 = { a: 1, b: 2 };
const obj2 = Object.create(null);
const obj3 = new Object();

// Object Property Descriptors
Object.defineProperty(obj1, 'c', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true
});

// Object Methods
Object.keys(obj1);         // Get enumerable keys
Object.values(obj1);       // Get values
Object.entries(obj1);      // Get key-value pairs
Object.getOwnPropertyNames(obj1); // All property names
Object.getOwnPropertySymbols(obj1); // Symbol properties
Object.getOwnPropertyDescriptor(obj1, 'a'); // Get descriptor

// Object Operations
Object.assign({}, obj1);   // Shallow copy
Object.freeze(obj1);       // Make immutable
Object.seal(obj1);         // Prevent add/delete
Object.preventExtensions(obj1); // Prevent additions
const merged = { ...obj1, ...obj2 }; // Spread operator

// Property Checks
obj1.hasOwnProperty('a');  // Own property check
'a' in obj1;               // Property in object/prototype
Object.is(obj1.a, 1);      // Strict equality

// Object Prototype
Object.getPrototypeOf(obj1);    // Get prototype
Object.setPrototypeOf(obj1, {}); // Set prototype

// Property Attributes
Object.defineProperties(obj1, {
  d: { value: 4, writable: true },
  e: { get() { return this._e; } }
});

// Object Observation
const handler = {
  get: (target, prop) => `Accessing ${prop}`,
  set: (target, prop, value) => {
    target[prop] = value;
    return true;
  }
};
const proxy = new Proxy(obj1, handler);

// Object Methods on Prototype
Object.prototype.toString.call(obj1);
Object.prototype.hasOwnProperty.call(obj1, 'a');

// Object Iteration
for (const key in obj1) { /* ... */ }
Object.keys(obj1).forEach(key => { /* ... */ });
for (const [key, value] of Object.entries(obj1)) { /* ... */ }

// Object Property Flags
const descriptor = {
  enumerable: false,    // Show in loops
  configurable: false,  // Can delete/modify
  writable: false,      // Can change value
  value: 'static'       // Property value
};
