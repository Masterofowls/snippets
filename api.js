// API Request Helpers
const api = {
  // Basic GET request
  async get(url, options = {}) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  },

  // POST request with body
  async post(url, data, options = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data),
      ...options
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  },

  // PUT request
  async put(url, data, options = {}) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data),
      ...options
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  },

  // DELETE request
  async delete(url, options = {}) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  },

  // Upload file
  async upload(url, file, options = {}) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      ...options
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  },

  // Download file
  async download(url, filename) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  },

  // Request with timeout
  async withTimeout(promise, timeout = 5000) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timeout')), timeout);
    });
    return Promise.race([promise, timeoutPromise]);
  },

  // Retry mechanism
  async retry(fn, retries = 3, delay = 1000) {
    try {
      return await fn();
    } catch (error) {
      if (retries === 0) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
      return this.retry(fn, retries - 1, delay * 2);
    }
  },

  // Cache responses
  cache: new Map(),
  async cached(key, fn, ttl = 60000) {
    if (this.cache.has(key)) {
      const { value, expires } = this.cache.get(key);
      if (expires > Date.now()) return value;
      this.cache.delete(key);
    }
    
    const value = await fn();
    this.cache.set(key, {
      value,
      expires: Date.now() + ttl
    });
    return value;
  },

  // Request queue
  queue: [],
  async enqueue(request) {
    this.queue.push(request);
    if (this.queue.length === 1) {
      await this.processQueue();
    }
  },

  async processQueue() {
    while (this.queue.length > 0) {
      const request = this.queue[0];
      try {
        await request();
      } catch (error) {
        console.error('Queue processing error:', error);
      }
      this.queue.shift();
    }
  }
};

// Usage Examples:
/*
// Basic GET request
const data = await api.get('https://api.example.com/data');

// POST with retry
await api.retry(() => 
  api.post('https://api.example.com/create', { name: 'Test' })
);

// Cached GET request
const cachedData = await api.cached('key', () => 
  api.get('https://api.example.com/data')
);

// Upload with timeout
const file = new File(['content'], 'test.txt');
await api.withTimeout(
  api.upload('https://api.example.com/upload', file),
  10000
);

// Queued requests
api.enqueue(() => api.post('https://api.example.com/task1'));
api.enqueue(() => api.post('https://api.example.com/task2'));
*/
