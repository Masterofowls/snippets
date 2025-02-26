// Async/Await Patterns
async function basicAsyncAwait() {
  try {
    const result = await someAsyncOperation();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Parallel Execution
async function parallel() {
  const [result1, result2] = await Promise.all([
    asyncOperation1(),
    asyncOperation2()
  ]);
  return { result1, result2 };
}

// Sequential vs Concurrent
async function sequential() {
  const result1 = await asyncOperation1();
  const result2 = await asyncOperation2(); // Runs after result1
  return [result1, result2];
}

async function concurrent() {
  const promise1 = asyncOperation1(); // Starts immediately
  const promise2 = asyncOperation2(); // Starts immediately
  return [await promise1, await promise2];
}

// Timeout Pattern
async function withTimeout(asyncFn, ms) {
  const timeout = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), ms)
  );
  return Promise.race([asyncFn(), timeout]);
}

// Retry Pattern
async function retry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise(resolve => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay);
  }
}

// Async Iterator
async function* asyncGenerator() {
  for (const item of items) {
    yield await processItem(item);
  }
}

// Async Queue
class AsyncQueue {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  async add(task) {
    this.queue.push(task);
    if (!this.processing) {
      this.processing = true;
      await this.process();
    }
  }

  async process() {
    while (this.queue.length) {
      const task = this.queue.shift();
      await task();
    }
    this.processing = false;
  }
}

// Cancellable Async Operation
function cancellableAsync(asyncFn) {
  let isCancelled = false;
  
  const wrapper = async (...args) => {
    if (isCancelled) throw new Error('Operation cancelled');
    const result = await asyncFn(...args);
    if (isCancelled) throw new Error('Operation cancelled');
    return result;
  };

  wrapper.cancel = () => {
    isCancelled = true;
  };

  return wrapper;
}

// Async Event Emitter
class AsyncEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }

  async emit(event, ...args) {
    if (!this.events.has(event)) return;
    await Promise.all(
      this.events.get(event).map(cb => cb(...args))
    );
  }
}
