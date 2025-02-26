// Data Transfer Methods in JavaScript

// 1. URL Parameters
const addUrlParams = (url, params) => {
  const urlObj = new URL(url);
  Object.keys(params).forEach(key => urlObj.searchParams.append(key, params[key]));
  return urlObj.toString();
};

// Usage:
// window.location.href = addUrlParams('/page', { id: 123, type: 'user' });

// 2. Local Storage
const storageTransfer = {
  set: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
  get: (key) => JSON.parse(localStorage.getItem(key)),
  remove: (key) => localStorage.removeItem(key)
};

// 3. Session Storage
const sessionTransfer = {
  set: (key, data) => sessionStorage.setItem(key, JSON.stringify(data)),
  get: (key) => JSON.parse(sessionStorage.getItem(key)),
  remove: (key) => sessionStorage.removeItem(key)
};

// 4. React Router State
const routerStateTransfer = {
  navigate: (path, data) => {
    navigate(path, { state: data });
  },
  // Access in target component:
  // const location = useLocation();
  // const data = location.state;
};

// 5. Cookies
const cookieTransfer = {
  set: (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  },
  get: (name) => {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(c => c.trim().startsWith(name + '='));
    return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
  },
  remove: (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
};

// 6. IndexedDB
const indexedDBTransfer = {
  open: (dbName, version = 1) => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, version);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  },
  store: async (dbName, storeName, data) => {
    const db = await indexedDBTransfer.open(dbName);
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    store.put(data);
  },
  retrieve: async (dbName, storeName, key) => {
    const db = await indexedDBTransfer.open(dbName);
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  }
};

// 7. Web Storage Event (Cross-Tab Communication)
const crossTabTransfer = {
  emit: (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.removeItem(key);
  },
  listen: (key, callback) => {
    window.addEventListener('storage', (e) => {
      if (e.key === key) {
        callback(JSON.parse(e.newValue));
      }
    });
  }
};

// 8. PostMessage (Cross-Origin Communication)
const postMessageTransfer = {
  send: (targetWindow, data, targetOrigin = '*') => {
    targetWindow.postMessage(data, targetOrigin);
  },
  receive: (callback, trustedOrigin) => {
    window.addEventListener('message', (event) => {
      if (!trustedOrigin || event.origin === trustedOrigin) {
        callback(event.data);
      }
    });
  }
};

// Best Practices:
/*
1. Choose method based on:
   - Data size
   - Security requirements
   - Persistence needs
   - Cross-origin requirements
   
2. Security considerations:
   - Avoid sensitive data in URLs
   - Use secure cookies
   - Validate data on both ends
   - Implement proper CORS policies
   
3. Performance tips:
   - Use appropriate storage method for data size
   - Clear old/unused data
   - Handle storage limits
   - Implement proper error handling
   
4. Data handling:
   - Always stringify/parse JSON
   - Validate data structure
   - Handle expired/invalid data
   - Implement proper cleanup
*/
