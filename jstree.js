// JavaScript Project Tree Cheatsheet with React Cases, UI Routes, Server Deployment, and PWA Structure

// Project Structure
// ├── src/                # Source files
// │   ├── components/     # React components
// │   │   ├── Header.js   # Header component
// │   │   ├── Footer.js   # Footer component
// │   │   ├── Button.js   # Reusable button component
// │   │   └── Modal.js    # Modal component
// │   ├── pages/          # Page components
// │   │   ├── Home.js     # Home page
// │   │   ├── About.js    # About page
// │   │   ├── Contact.js   # Contact page
// │   │   └── NotFound.js  # 404 Not Found page
// │   ├── routes/         # UI routes
// │   │   └── AppRoutes.js # Main application routes
// │   ├── styles/         # CSS/Sass files
// │   │   ├── main.css     # Main stylesheet
// │   │   └── variables.scss # Sass variables
// │   ├── hooks/          # Custom hooks
// │   │   └── useFetch.js  # Custom hook for fetching data
// │   ├── context/        # Context API files
// │   │   └── AuthContext.js # Authentication context
// │   ├── utils/          # Utility functions
// │   ├── serviceWorker.js # Service worker for PWA
// │   └── manifest.json    # Web app manifest for PWA
// ├── public/             # Public assets
// │   ├── index.html      # Main HTML file
// │   ├── favicon.ico     # Favicon
// │   ├── logo192.png     # PWA logo
// │   ├── logo512.png     # PWA logo
// │   └── manifest.json    # Manifest file for PWA
// ├── server/             # Server files
// │   ├── server.js       # Main server file
// │   ├── routes/         # Server routes
// │   │   └── api.js      # API routes
// │   ├── controllers/    # Controllers for handling requests
// │   ├── models/         # Database models
// │   └── config/         # Configuration files
// ├── tests/              # Test files
// │   ├── App.test.js     # Tests for App component
// │   └── Button.test.js   # Tests for Button component
// ├── .gitignore          # Git ignore file
// ├── package.json        # Project metadata and dependencies
// ├── README.md           # Project documentation
// ├── webpack.config.js    # Webpack configuration

// Common Commands
// npm install             # Install dependencies
// npm start               # Start the development server
// npm run build           # Build the project for production
// npm test                # Run tests
// npm run deploy          # Deploy the application

// ESLint Configuration
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'quotes': ['error', 'single'],
  },
};

// Prettier Configuration
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}

// React Component Example
// src/components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} className="btn">
    {label}
  </button>
);

export { Button }; // Changed to named export

// React Page Example
// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Header />
    <h1>Welcome to the Home Page</h1>
    <Footer />
  </div>
);

export { Home }; // Changed to named export

// Additional React Component Example
// src/components/Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    <p>© 2023 Your Company</p>
  </footer>
);

export { Footer }; // Changed to named export

// Additional React Component Example
// src/components/Header.js
import React from 'react';

const Header = () => (
  <header>
    <h1>Your Company</h1>
  </header>
);

export { Header }; // Changed to named export

// Additional React Component Example
// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export { Modal }; // Changed to named export

// Custom Hook Example
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export { useFetch }; // Changed to named export

// Context API Example
// src/context/AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider }; // Changed to named export

// Service Worker Example
// src/serviceWorker.js
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  '/favicon.ico',
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Server Example
// server/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// API Routes Example
// server/routes/api.js
const express = require('express');
const router = express.Router();

// Sample API endpoint
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

module.exports = router; // Exporting the router

// UI Routes Example
// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default AppRoutes; // Exporting the AppRoutes component







