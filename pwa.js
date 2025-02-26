// Service Worker Registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      console.log('ServiceWorker registered with scope:', registration.scope);
    } catch (err) {
      console.error('ServiceWorker registration failed:', err);
    }
  }
};

// Cache Management
const CACHE_NAME = 'app-cache-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js'
];

const precacheAssets = async () => {
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll(CACHE_ASSETS);
};

const clearOldCaches = async () => {
  const cacheKeys = await caches.keys();
  const deletePromises = cacheKeys
    .filter(key => key !== CACHE_NAME)
    .map(key => caches.delete(key));
  return Promise.all(deletePromises);
};

// Web App Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

const showInstallPrompt = async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User ${outcome} the A2HS prompt`);
  deferredPrompt = null;
};

// Background Sync
const registerBackgroundSync = async () => {
  if ('sync' in registration) {
    try {
      await registration.sync.register('sync-tag');
    } catch (err) {
      console.error('Background sync failed:', err);
    }
  }
};

// Push Notifications
const subscribeToPush = async () => {
  try {
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    });
    console.log('Push subscription:', subscription);
  } catch (err) {
    console.error('Push subscription failed:', err);
  }
};

// Offline Detection
const handleConnectionChange = () => {
  const status = navigator.onLine ? 'online' : 'offline';
  console.log('Connection status:', status);
  document.dispatchEvent(new CustomEvent('connectionChange', { 
    detail: { status } 
  }));
};

window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);

// Web Share API
const shareContent = async (data) => {
  if (navigator.share) {
    try {
      await navigator.share(data);
      console.log('Content shared successfully');
    } catch (err) {
      console.error('Share failed:', err);
    }
  }
};

// Periodic Background Sync
const registerPeriodicSync = async () => {
  if ('periodicSync' in registration) {
    try {
      await registration.periodicSync.register('content-sync', {
        minInterval: 24 * 60 * 60 * 1000 // 24 hours
      });
    } catch (err) {
      console.error('Periodic sync failed:', err);
    }
  }
};

// Utility Functions
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const buffer = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    buffer[i] = rawData.charCodeAt(i);
  }
  return buffer;
};

// Best Practices:
// 1. Always check for feature support before using
// 2. Handle errors gracefully
// 3. Use async/await for better readability
// 4. Implement proper cache strategies
// 5. Consider offline-first approach
// 6. Handle service worker lifecycle
// 7. Implement proper security measures
// 8. Test across different browsers and devices
