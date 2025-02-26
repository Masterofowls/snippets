// String Interpolation Cheatsheet

// Basic Template Literals
const name = 'Alice';
const greeting = `Hello ${name}!`; // "Hello Alice!"

// Expression Interpolation
const a = 5;
const b = 10;
const sum = `${a} + ${b} = ${a + b}`; // "5 + 10 = 15"

// Multi-line Strings
const multiLine = `
  This is a
  multi-line
  string
`;

// Tagged Templates
function myTag(strings, ...values) {
  return strings.reduce((result, str, i) => 
    result + str + (values[i] || ''), '');
}
const tagged = myTag`Hello ${name}!`;

// HTML Template
const item = { id: 1, name: 'Product' };
const html = `
  <div id="item-${item.id}">
    <h2>${item.name}</h2>
  </div>
`;

// Nested Templates
const nested = `
  ${`nested ${`deeply ${name}`}`}
`;

// Conditional Interpolation
const status = 'active';
const display = `Status: ${status === 'active' ? 'ON' : 'OFF'}`;

// Array Interpolation
const fruits = ['apple', 'banana', 'orange'];
const list = `Fruits: ${fruits.join(', ')}`;

// Object Property Interpolation
const user = { firstName: 'John', lastName: 'Doe' };
const fullName = `${user.firstName} ${user.lastName}`;

// Function Call Interpolation
const getTime = () => new Date().toLocaleTimeString();
const time = `Current time: ${getTime()}`;

// Raw String Access
const rawString = String.raw`Not \n interpreted`;

// Unicode Characters
const unicode = `\u{1F600} Smile emoji`;

// Padding & Formatting
const num = 42;
const formatted = `${num.toString().padStart(5, '0')}`; // "00042"

// Template Literal as Object Key
const prop = 'dynamic';
const obj = {
  [`key_${prop}`]: 'value'
};

// Advanced Tagged Template
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => 
    acc + str + (values[i] ? `<span class="highlight">${values[i]}</span>` : ''), '');
}
const highlighted = highlight`Check this ${name} out!`;
