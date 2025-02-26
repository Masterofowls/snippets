// Package.json Structure and Syntax Cheatsheet

const packageJsonExample = {
  // Basic Info
  "name": "my-package",              // Required, lowercase, no spaces
  "version": "1.0.0",               // Required, semver format
  "description": "Package description",
  "author": {
    "name": "Author Name",
    "email": "author@email.com",
    "url": "https://author.com"
  },
  "license": "MIT",
  "private": false,                 // If true, prevents accidental publishing

  // Entry Points
  "main": "dist/index.js",         // Main entry point
  "module": "dist/index.mjs",      // ES modules entry
  "types": "dist/index.d.ts",      // TypeScript definitions
  "exports": {                      // Modern entry points
    ".": {
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
    }
  },

  // Package Content
  "files": [                       // Files to include when publishing
    "dist",
    "README.md"
  ],

  // Scripts
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "tsc",
    "prepublishOnly": "npm run build",
    "preinstall": "node preinstall.js",
    "postinstall": "node postinstall.js"
  },

  // Dependencies
  "dependencies": {                // Runtime dependencies
    "lodash": "^4.17.21",
    "express": "~4.17.1"
  },
  "devDependencies": {            // Development-only dependencies
    "typescript": "^4.5.0",
    "jest": "^27.0.0"
  },
  "peerDependencies": {           // Required peer dependencies
    "react": ">=16.8.0"
  },
  "optionalDependencies": {       // Optional dependencies
    "fsevents": "^2.3.2"
  },
  "bundledDependencies": [        // Dependencies bundled with package
    "package-name"
  ],

  // Configuration
  "config": {                     // Environment variables
    "port": "8080"
  },
  "engines": {                    // Required engine versions
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },

  // Publishing
  "publishConfig": {              // npm publish configuration
    "registry": "https://npm.pkg.github.com",
    "access": "public"
  },

  // Repository
  "repository": {
    "type": "git",
    "url": "https://github.com/username/repo.git"
  },
  "bugs": {
    "url": "https://github.com/username/repo/issues",
    "email": "project@hostname.com"
  },
  "homepage": "https://github.com/username/repo#readme",

  // Package Metadata
  "keywords": ["keyword1", "keyword2"],
  "man": ["./man/doc.1"],         // Man pages
  "directories": {                // Package directories
    "lib": "lib",
    "test": "test",
    "doc": "doc",
    "example": "example"
  },

  // Browser/Module Configuration
  "browser": {                    // Browser-specific overrides
    "./lib/server.js": "./lib/browser.js"
  },
  "sideEffects": false,          // Webpack tree shaking
  "type": "module",              // Package type (commonjs or module)

  // Workspaces (Monorepo)
  "workspaces": [
    "packages/*"
  ],

  // OS/CPU Compatibility
  "os": ["darwin", "linux"],      // Supported operating systems
  "cpu": ["x64", "ia32"],        // Supported CPU architectures

  // Custom Fields
  "customField": "value"         // Custom metadata fields
};

// Version Format Examples
const versionExamples = {
  exact: "1.2.3",                // Exact version
  caret: "^1.2.3",               // Minor and patch updates (1.2.3 to <2.0.0)
  tilde: "~1.2.3",               // Patch updates only (1.2.3 to <1.3.0)
  range: ">=1.2.3 <2.0.0",       // Version range
  latest: "latest",              // Latest version
  beta: "beta",                  // Beta version
  tag: "next",                   // Tagged version
  local: "file:../local-pkg",    // Local package
  git: "git+https://github.com/user/repo.git",  // Git repository
  github: "username/repo#branch"  // GitHub repository
};

// Common Script Patterns
const scriptPatterns = {
  "dev": "nodemon src/index.js",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx}\"",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "clean": "rimraf dist",
  "build:ts": "tsc",
  "build:webpack": "webpack --mode production",
  "deploy": "npm run build && npm publish",
  "docker:build": "docker build -t myapp .",
  "prepare": "husky install"
};
