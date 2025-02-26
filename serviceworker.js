// Service Worker Lifecycle Events
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== 'v1') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event Handling
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open('v1').then(cache => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
  );
});

// Background Sync
self.addEventListener('sync', event => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(
      // Sync logic here
      syncMessages()
    );
  }
});

// Push Notifications
self.addEventListener('push', event => {
  const options = {
    body: event.data.text(),
    icon: 'images/icon.png',
    badge: 'images/badge.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'Explore'},
      {action: 'close', title: 'Close'}
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('https://example.com')
  );
});

// Periodic Background Sync
self.addEventListener('periodicsync', event => {
  if (event.tag === 'daily-sync') {
    event.waitUntil(
      // Daily sync logic
      dailySync()
    );
  }
});

// Client Communication
self.addEventListener('message', event => {
  // Handle messages from clients
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper Functions
async function syncMessages() {
  try {
    const queue = await getMessageQueue();
    await sendMessages(queue);
    await clearMessageQueue();
  } catch (err) {
    console.error('Sync failed:', err);
  }
}

async function dailySync() {
  try {
    await updateCache();
    await syncData();
  } catch (err) {
    console.error('Daily sync failed:', err);
  }
}

// Cache Strategies
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open('v1');
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return caches.match(request);
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open('v1');
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    cache.put(request, response.clone());
    return response;
  });
  
  return cached || fetchPromise;
}
