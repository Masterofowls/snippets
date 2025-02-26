// ESLint Configuration Best Practices
const eslintConfig = {
  'no-unused-vars': 'error',           // Disallow unused variables
  'no-undef': 'error',                 // Disallow undeclared variables
  'no-console': 'warn',                // Warn on console.* calls
  'prefer-const': 'error',             // Prefer const over let
  'eqeqeq': ['error', 'always'],       // Require === and !==
  'no-var': 'error',                   // Disallow var keyword
  'curly': ['error', 'all'],           // Require curly braces
  'max-len': ['warn', { 'code': 80 }], // Max line length
};

// Common ESLint Rules
const commonRules = {
  // Variables
  'no-shadow': 'error',                // Disallow variable shadowing
  'no-use-before-define': 'error',     // Use before define
  
  // Best Practices  
  'complexity': ['warn', 10],          // Cyclomatic complexity
  'no-eval': 'error',                  // Disallow eval()
  'no-return-await': 'error',          // Redundant return await
  
  // ES6
  'arrow-body-style': ['error', 'as-needed'], // Arrow function style
  'no-duplicate-imports': 'error',      // No duplicate imports
  'prefer-template': 'error',           // Template literals
  
  // Style
  'indent': ['error', 2],              // 2 space indentation
  'quotes': ['error', 'single'],        // Single quotes
  'semi': ['error', 'always'],         // Required semicolons
};

// Prettier Configuration
const prettierConfig = {
  printWidth: 80,                      // Line length
  tabWidth: 2,                         // Spaces per tab
  useTabs: false,                      // Use spaces
  semi: true,                          // Add semicolons
  singleQuote: true,                   // Single quotes
  trailingComma: 'es5',               // Trailing commas
  bracketSpacing: true,               // Space in objects
  arrowParens: 'avoid',               // Arrow functions
};

// TypeScript ESLint Rules
const typescriptRules = {
  '@typescript-eslint/explicit-function-return-type': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/interface-name-prefix': 'off',
};

// Jest ESLint Rules
const jestRules = {
  'jest/no-disabled-tests': 'warn',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/valid-expect': 'error',
};

// React ESLint Rules
const reactRules = {
  'react/prop-types': 'error',
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
};

// Common ESLint Plugins
const commonPlugins = [
  'import',                            // ES2015+ import/export
  'promise',                           // Promise rules
  'security',                          // Security rules
  'node',                             // Node.js rules
  'prettier',                         // Prettier integration
];

// ESLint Ignore Patterns
const ignorePatterns = [
  'node_modules/',
  'dist/',
  'build/',
  'coverage/',
  '*.min.js',
  '*.test.js',
];
