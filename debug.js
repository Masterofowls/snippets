// Advanced JavaScript Debugging Cheatsheet

// Breakpoints
debugger;                          // Add breakpoint in code
// In Chrome DevTools: 
// - Click line number for regular breakpoint
// - Right-click -> Add conditional breakpoint
// - Right-click -> Add logpoint

// Console Methods
console.log('Basic log');          // Basic logging
console.info('Info message');      // Info level
console.warn('Warning message');    // Warning level
console.error('Error message');     // Error level
console.debug('Debug message');     // Debug level

// Advanced Console
console.group('Group Name');       // Start grouped logs
console.log('Nested item');
console.groupEnd();                // End group

console.time('Timer');             // Start timer
console.timeEnd('Timer');          // End and display time

console.trace();                   // Print stack trace
console.assert(condition, 'msg');  // Log if condition false

// Performance Analysis
performance.mark('start');         // Set performance marker
performance.mark('end');           // Set end marker
performance.measure('label', 'start', 'end'); // Measure between marks
console.table(performance.getEntriesByType('measure')); // Show results

// Error Handling
try {
  throw new Error('Custom error');
} catch (error) {
  console.error({
    name: error.name,
    message: error.message,
    stack: error.stack,
    cause: error.cause
  });
}

// Memory Debugging
console.log(process.memoryUsage()); // Show memory usage
// Use Chrome DevTools Memory tab for:
// - Heap snapshots
// - Allocation profiling
// - Memory timeline

// Network Debugging
// In Chrome DevTools Network tab:
// - Filter requests
// - Throttle network
// - Block requests
// - Replay XHR

// Source Maps
// Enable source maps in webpack/build:
// devtool: 'source-map'
// Then use original source in debugger

// Performance Profiling
console.profile('Profile');        // Start CPU profile
console.profileEnd();              // End CPU profile

// Useful Debug Utilities
const trace = label => console.log(`${label}:`, new Error().stack);
const debugObject = obj => console.dir(obj, {depth: null, colors: true});
const measureTime = async (fn, label) => {
  console.time(label);
  await fn();
  console.timeEnd(label);
};
