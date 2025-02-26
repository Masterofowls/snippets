// Math Constants
const PI = Math.PI;         // π (3.141592653589793)
const E = Math.E;           // Euler's number (2.718281828459045)
const SQRT2 = Math.SQRT2;   // Square root of 2 (1.4142135623730951)
const SQRT1_2 = Math.SQRT1_2; // Square root of 1/2 (0.7071067811865476)
const LN2 = Math.LN2;       // Natural log of 2 (0.6931471805599453)
const LN10 = Math.LN10;     // Natural log of 10 (2.302585092994046)

// Basic Math Operations
Math.abs(-5);              // Absolute value: 5
Math.sign(-5);             // Sign: -1, 0, or 1
Math.round(4.7);           // Round to nearest integer: 5
Math.ceil(4.3);            // Round up: 5
Math.floor(4.7);           // Round down: 4
Math.trunc(4.7);           // Remove decimal part: 4

// Power and Root Functions
Math.pow(2, 3);            // Power: 2³ = 8
Math.sqrt(16);             // Square root: 4
Math.cbrt(27);             // Cube root: 3
Math.exp(1);               // e raised to power: e¹
Math.expm1(1);             // exp(x) - 1
Math.hypot(3, 4);          // √(a² + b²): 5

// Logarithmic Functions
Math.log(E);               // Natural logarithm: 1
Math.log10(100);           // Base 10 logarithm: 2
Math.log2(8);              // Base 2 logarithm: 3
Math.log1p(1);             // Natural log of (1 + x)

// Trigonometric Functions (angles in radians)
Math.sin(PI / 2);          // Sine
Math.cos(PI);              // Cosine
Math.tan(PI / 4);          // Tangent
Math.asin(1);              // Arc sine
Math.acos(0);              // Arc cosine
Math.atan(1);              // Arc tangent
Math.atan2(1, 1);          // Arc tangent of quotient

// Hyperbolic Functions
Math.sinh(1);              // Hyperbolic sine
Math.cosh(1);              // Hyperbolic cosine
Math.tanh(1);              // Hyperbolic tangent
Math.asinh(1);             // Inverse hyperbolic sine
Math.acosh(2);             // Inverse hyperbolic cosine
Math.atanh(0.5);           // Inverse hyperbolic tangent

// Random Numbers
Math.random();             // Random number [0,1)
Math.floor(Math.random() * 10); // Random integer [0,9]

// Useful Math Utilities
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const radToDeg = rad => rad * 180 / Math.PI;
const degToRad = deg => deg * Math.PI / 180;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
