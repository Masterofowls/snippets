// Basic Export Syntax
export const name = 'value';           // Named export
export function myFunc() {};           // Export function
export class MyClass {};               // Export class
export { name, myFunc };              // Export list
export default function() {};          // Default export
export { name as newName };           // Export with alias

// Basic Import Syntax
import defaultExport from 'module';    // Import default
import * as name from 'module';        // Import all as namespace
import { export1, export2 } from 'module'; // Import multiple
import { export1 as alias } from 'module'; // Import with alias
import defaultExport, { export1 } from 'module'; // Mixed import
import 'module';                       // Import for side effects

// Re-export Syntax
export { name } from 'module';         // Re-export named export
export * from 'module';                // Re-export all
export * as name from 'module';        // Re-export as namespace
export { import1 as export1 } from 'module'; // Re-export with alias
export { default } from 'module';      // Re-export default

// Dynamic Imports
const module = await import('module'); // Dynamic import
import('module').then(module => {});   // Promise-based import

// Module Features
import.meta;                          // Module metadata
import.meta.url;                      // Module URL

// Common Patterns
// Aggregate exports in index.js
export * from './module1.js';
export * from './module2.js';

// Conditional exports
export const feature = (
  process.env.NODE_ENV === 'production' 
    ? require('./prod.js')
    : require('./dev.js')
);

// Circular dependency handling
export let value;
import('./module').then(module => {
  value = module.default;
});
