// String Creation
const str1 = 'Single quotes';
const str2 = "Double quotes";
const str3 = `Template literals`;
const str4 = String(123);      // Convert to string
const str5 = (123).toString(); // Number to string

// String Methods
// Basic Operations
str1.length;               // String length
str1.charAt(0);           // Character at index
str1.charCodeAt(0);       // UTF-16 code at index
str1[0];                  // Bracket notation access
str1.concat(' more');     // Concatenate strings
str1.repeat(2);           // Repeat string

// Searching and Extracting
str1.indexOf('i');        // Find first index
str1.lastIndexOf('i');    // Find last index
str1.includes('Single');  // Check substring
str1.startsWith('S');     // Check start
str1.endsWith('s');       // Check end
str1.slice(1, 5);        // Extract substring
str1.substring(1, 5);    // Extract substring
str1.substr(1, 4);       // Extract length chars

// Case Manipulation
str1.toLowerCase();       // Convert to lowercase
str1.toUpperCase();      // Convert to uppercase
str1.trim();             // Remove whitespace
str1.trimStart();        // Remove start whitespace
str1.trimEnd();          // Remove end whitespace

// Pattern Matching
str1.match(/pattern/g);   // Match regex
str1.matchAll(/pattern/g);// Match all regex
str1.search(/pattern/);   // Search regex
str1.replace('old', 'new'); // Replace first
str1.replaceAll('old', 'new'); // Replace all
str1.split(' ');         // Split into array

// Unicode and Special Characters
str1.normalize();        // Unicode normalization
String.fromCharCode(65); // ASCII to character
String.fromCodePoint(128512); // Unicode to character

// Template Literal Features
const name = 'World';
const greeting = `Hello ${name}`; // String interpolation
const multiline = `
  This is a
  multiline string
`;

// Useful String Utilities
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = str => str.split('').reverse().join('');
const countOccurrences = (str, char) => str.split(char).length - 1;
const isAlphanumeric = str => /^[a-zA-Z0-9]+$/.test(str);
