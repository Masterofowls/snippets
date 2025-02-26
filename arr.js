// Array Creation
const arr1 = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const arr4 = Array.from({length: 3}, (_, i) => i); // [0, 1, 2]

// Array Methods
// Adding/Removing Elements
arr1.push(4);           // Add to end
arr1.pop();            // Remove from end
arr1.unshift(0);       // Add to start 
arr1.shift();          // Remove from start
arr1.splice(1, 2, 'a'); // Remove/replace elements

// Finding Elements
arr1.indexOf(2);       // Find index
arr1.includes(3);      // Check existence
arr1.find(x => x > 2); // Find first matching element
arr1.findIndex(x => x > 2); // Find first matching index

// Transforming Arrays
arr1.map(x => x * 2);        // Transform elements
arr1.filter(x => x > 2);     // Filter elements
arr1.reduce((sum, x) => sum + x, 0); // Reduce to single value
arr1.slice(1, 3);           // Extract portion

// Sorting and Reversing
arr1.sort((a, b) => a - b); // Sort numerically
arr1.reverse();             // Reverse array

// Other Useful Methods
arr1.join('-');            // Join elements
arr1.concat(arr2);         // Combine arrays
arr1.flat();               // Flatten nested arrays
arr1.flatMap(x => [x, x * 2]); // Map and flatten

// Array Spread and Rest
const copy = [...arr1];    // Spread operator copy
const [first, ...rest] = arr1; // Rest operator

// Array.prototype methods
Array.isArray(arr1);       // Check if array
arr1.every(x => x > 0);    // Test all elements
arr1.some(x => x > 2);     // Test any elements
arr1.fill(0, 1, 3);       // Fill with value

// Iterating
arr1.forEach(x => console.log(x));
for (const item of arr1) { /* ... */ }
for (const [index, value] of arr1.entries()) { /* ... */ }
