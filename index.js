/**
 * String Transform Utils
 * A collection of utility functions for string transformations
 */

/**
 * Converts a character at the specified index to uppercase
 * @param {string} str - The input string
 * @param {number} index - The index of the character to uppercase
 * @returns {string} The modified string
 */
function uppercaseAt(str, index) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (typeof index !== 'number') {
    throw new TypeError('Second argument must be a number');
  }
  
  if (index < 0 || index >= str.length) {
    return str; // Return original if index is out of bounds
  }
  
  return str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1);
}

/**
 * Converts a character at the specified index to lowercase
 * @param {string} str - The input string
 * @param {number} index - The index of the character to lowercase
 * @returns {string} The modified string
 */
function lowercaseAt(str, index) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (typeof index !== 'number') {
    throw new TypeError('Second argument must be a number');
  }
  
  if (index < 0 || index >= str.length) {
    return str;
  }
  
  return str.slice(0, index) + str[index].toLowerCase() + str.slice(index + 1);
}

/**
 * Converts characters at multiple indexes to uppercase
 * @param {string} str - The input string
 * @param {number[]} indexes - Array of indexes to uppercase
 * @returns {string} The modified string
 */
function uppercaseAtIndexes(str, indexes) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (!Array.isArray(indexes)) {
    throw new TypeError('Second argument must be an array');
  }
  
  let result = str.split('');
  indexes.forEach(index => {
    if (index >= 0 && index < result.length) {
      result[index] = result[index].toUpperCase();
    }
  });
  return result.join('');
}

/**
 * Converts characters at multiple indexes to lowercase
 * @param {string} str - The input string
 * @param {number[]} indexes - Array of indexes to lowercase
 * @returns {string} The modified string
 */
function lowercaseAtIndexes(str, indexes) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (!Array.isArray(indexes)) {
    throw new TypeError('Second argument must be an array');
  }
  
  let result = str.split('');
  indexes.forEach(index => {
    if (index >= 0 && index < result.length) {
      result[index] = result[index].toLowerCase();
    }
  });
  return result.join('');
}

/**
 * Capitalizes the first letter of a string
 * @param {string} str - The input string
 * @returns {string} The capitalized string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

/**
 * Toggles the case of a character at the specified index
 * @param {string} str - The input string
 * @param {number} index - The index of the character to toggle
 * @returns {string} The modified string
 */
function toggleCaseAt(str, index) {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  
  if (typeof index !== 'number') {
    throw new TypeError('Second argument must be a number');
  }
  
  if (index < 0 || index >= str.length) {
    return str;
  }
  
  const char = str[index];
  const toggledChar = char === char.toUpperCase() 
    ? char.toLowerCase() 
    : char.toUpperCase();
  
  return str.slice(0, index) + toggledChar + str.slice(index + 1);
}

// Export all functions
module.exports = {
  uppercaseAt,
  lowercaseAt,
  uppercaseAtIndexes,
  lowercaseAtIndexes,
  capitalize,
  toggleCaseAt
};
