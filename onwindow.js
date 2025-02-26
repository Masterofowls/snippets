// Window Event Handlers
window.addEventListener('load', () => {
  console.log('Window loaded');
  // Initialize components after DOM is fully loaded
});

window.addEventListener('beforeunload', (event) => {
  // Handle unsaved changes
  event.preventDefault();
  event.returnValue = '';
});

window.addEventListener('resize', () => {
  // Handle window resize events
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`Window resized to ${width}x${height}`);
});

window.addEventListener('online', () => {
  console.log('Connection restored');
});

window.addEventListener('offline', () => {
  console.log('Connection lost');
});

// Window Properties & Methods
const windowUtils = {
  // Screen properties
  getScreenInfo: () => {
    return {
      width: window.screen.width,
      height: window.screen.height,
      availWidth: window.screen.availWidth,
      availHeight: window.screen.availHeight,
      colorDepth: window.screen.colorDepth,
      orientation: window.screen.orientation
    };
  },

  // Window position & size
  getWindowMetrics: () => {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      pageXOffset: window.pageXOffset,
      pageYOffset: window.pageYOffset
    };
  },

  // Window navigation
  navigate: {
    reload: () => window.location.reload(),
    goBack: () => window.history.back(),
    goForward: () => window.history.forward(),
    goTo: (url) => window.location.href = url
  }
};

// Storage APIs
const storageManager = {
  local: {
    set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(localStorage.getItem(key)),
    remove: (key) => localStorage.removeItem(key),
    clear: () => localStorage.clear()
  },
  session: {
    set: (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
    get: (key) => JSON.parse(sessionStorage.getItem(key)),
    remove: (key) => sessionStorage.removeItem(key),
    clear: () => sessionStorage.clear()
  }
};

// Window Focus Management
window.addEventListener('focus', () => {
  console.log('Window gained focus');
});

window.addEventListener('blur', () => {
  console.log('Window lost focus');
});

// Scroll Management
const scrollUtils = {
  scrollTo: (x, y) => window.scrollTo(x, y),
  smoothScrollTo: (x, y) => window.scrollTo({ 
    top: y, 
    left: x, 
    behavior: 'smooth' 
  }),
  scrollToElement: (element) => element.scrollIntoView({ 
    behavior: 'smooth', 
    block: 'center' 
  })
};

// Performance Monitoring
const performance = {
  getMeasures: () => {
    const timing = window.performance.timing;
    return {
      loadTime: timing.loadEventEnd - timing.navigationStart,
      domReady: timing.domComplete - timing.domLoading,
      networkLatency: timing.responseEnd - timing.requestStart
    };
  },
  mark: (name) => window.performance.mark(name),
  measure: (name, startMark, endMark) => window.performance.measure(name, startMark, endMark)
};

// Visibility API
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});

// Best Practices:
// 1. Always handle errors in event listeners
// 2. Clean up event listeners when no longer needed
// 3. Use debounce/throttle for resize and scroll events
// 4. Check feature support before using APIs
// 5. Implement proper security measures
// 6. Handle different browser compatibilities
// 7. Use performance monitoring wisely
// 8. Implement proper state management
// 9. Handle memory leaks
// 10. Consider accessibility
