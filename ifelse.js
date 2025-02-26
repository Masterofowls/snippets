// Basic if-else
if (condition) {
  // code
} else {
  // code
}

// Multiple conditions with else if
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}

// Ternary operator
const result = condition ? valueIfTrue : valueIfFalse;

// Multiple ternaries (use sparingly for readability)
const result2 = condition1 ? value1 
  : condition2 ? value2 
  : value3;

// Switch statement
switch (value) {
  case 1:
    // code
    break;
  case 2:
    // code
    break;
  default:
    // default code
}

// Switch with multiple cases
switch (value) {
  case 1:
  case 2:
    // code for 1 or 2
    break;
  default:
    // default code
}

// Logical AND short-circuit
condition && doSomething();

// Logical OR short-circuit
value = firstChoice || fallbackValue;

// Nullish coalescing
value = nullableValue ?? defaultValue;

// Optional chaining with conditional
if (obj?.prop?.method?.()) {
  // code
}

// Guard clause pattern
function example(param) {
  if (!param) return;
  if (param.error) return handleError();
  
  // main logic
}

// Object lookup instead of if-else chains
const actions = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};
const result3 = actions[operation]?.(x, y);

// Pattern matching simulation
const patterns = {
  number: x => typeof x === 'number',
  string: x => typeof x === 'string'
};

function match(value, patterns) {
  for (const [type, test] of Object.entries(patterns)) {
    if (test(value)) return type;
  }
  return 'unknown';
}
