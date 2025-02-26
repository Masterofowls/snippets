const optimizationCheatsheet = {
  performance: {
    // Measure performance of a function
    measureFunction: (fn) => {
      const start = performance.now();
      fn();
      const end = performance.now();
      return end - start; // returns time taken in milliseconds
    },
    // Optimize image loading
    lazyLoadImages: (images) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; // Load image
            observer.unobserve(img); // Stop observing
          }
        });
      });
      images.forEach(image => observer.observe(image));
    },
    // Throttle function calls
    throttle: (func, limit) => {
      let lastFunc;
      let lastRan;
      return function() {
        const context = this;
        const args = arguments;
        if (!lastRan) {
          func.apply(context, args);
          lastRan = Date.now();
        } else {
          clearTimeout(lastFunc);
          lastFunc = setTimeout(function() {
            if ((Date.now() - lastRan) >= limit) {
              func.apply(context, args);
              lastRan = Date.now();
            }
          }, limit - (Date.now() - lastRan));
        }
      };
    },
    // Debounce function calls
    debounce: (func, delay) => {
      let timeout;
      return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
      };
    }
  },
  accessibility: {
    // Ensure all images have alt text
    checkImages: (images) => {
      images.forEach(img => {
        if (!img.alt) {
          console.warn(`Image with src ${img.src} is missing alt text.`);
        }
      });
    },
    // Add ARIA roles to elements
    addAriaRoles: (element, role) => {
      element.setAttribute('role', role);
    }
  },
  security: {
    // Sanitize user input
    sanitizeInput: (input) => {
      const temp = document.createElement('div');
      temp.textContent = input;
      return temp.innerHTML; // Returns sanitized HTML
    },
    // Implement Content Security Policy
    setCSP: (policy) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = policy;
      document.head.appendChild(meta);
    }
  }
};

