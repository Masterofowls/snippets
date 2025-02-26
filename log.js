// Console Methods
console.log('Basic log');           // Basic logging
console.info('Info message');       // Info logging
console.warn('Warning message');    // Warning logging
console.error('Error message');     // Error logging
console.debug('Debug message');     // Debug logging

// Styled Console Output
console.log('%cStyled text', 'color: blue; font-size: 20px; font-weight: bold');

// Console Grouping
console.group('Group Name');        // Start grouped logs
console.log('Nested item');
console.groupEnd();                 // End grouping

// Performance Measurement
console.time('timer');             // Start timer
console.timeEnd('timer');          // End timer and show duration

// Stack Traces
console.trace('Stack trace');      // Show stack trace

// Tabular Data
console.table([                    // Display data as table
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
]);

// Assertion
console.assert(false, 'This will show'); // Log if assertion fails

// Count Occurrences
console.count('label');            // Count calls
console.countReset('label');       // Reset counter

// Clear Console
console.clear();                   // Clear console output

// Custom Console
const customConsole = new console.Console({
  stdout: process.stdout,
  stderr: process.stderr,
  colorMode: true
});

// Conditional Logging
const DEBUG = true;
DEBUG && console.log('Debug mode');

// Error Object Logging
try {
  throw new Error('Custom error');
} catch (error) {
  console.error('Error:', error.message);
  console.error('Stack:', error.stack);
}

// Memory Usage
console.log(process.memoryUsage());

// Format Specifiers
console.log('String: %s, Number: %d, Object: %o', 
  'text', 42, {key: 'value'});

// Performance Monitoring
console.profile('Profile Name');    // Start profiling (if supported)
console.profileEnd('Profile Name'); // End profiling (if supported)

// Dir and DirXML
console.dir(object, {depth: null, colors: true}); // Object inspection
