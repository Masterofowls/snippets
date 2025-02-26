// Basic Error Types
const typeError = new TypeError('Invalid type');
const referenceError = new ReferenceError('Variable not defined');
const syntaxError = new SyntaxError('Invalid syntax');
const rangeError = new RangeError('Value out of range');
const customError = new Error('Custom error message');

// Custom Error Class
class BusinessError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'BusinessError';
    this.code = code;
    Error.captureStackTrace(this, BusinessError);
  }
}

// Try-Catch with Finally
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error({
    name: error.name,
    message: error.message,
    stack: error.stack,
    cause: error.cause
  });
} finally {
  // Always executes
  cleanup();
}

// Async Error Handling
async function asyncExample() {
  try {
    await riskyOperation();
  } catch (error) {
    if (error instanceof NetworkError) {
      // Handle network errors
    } else if (error instanceof ValidationError) {
      // Handle validation errors
    } else {
      throw error; // Re-throw unhandled errors
    }
  }
}

// Error Aggregation
class AggregateError extends Error {
  constructor(errors, message) {
    super(message);
    this.name = 'AggregateError';
    this.errors = errors;
  }
}

// Global Error Handler
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Graceful shutdown
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

// Error Boundary Pattern
class ErrorBoundary {
  constructor(fallback) {
    this.fallback = fallback;
  }
  
  async execute(fn) {
    try {
      return await fn();
    } catch (error) {
      console.error('Error Boundary caught:', error);
      return this.fallback();
    }
  }
}

// Utility Functions
const isOperationalError = (error) => {
  return error instanceof BusinessError ||
         error instanceof ValidationError;
};

const logError = (error) => {
  console.error({
    timestamp: new Date().toISOString(),
    name: error.name,
    message: error.message,
    stack: error.stack,
    metadata: error.metadata
  });
};
