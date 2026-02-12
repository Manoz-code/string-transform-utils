/**
 * Simple test file for string-transform-utils
 * Run with: node test.js
 */

const {
  uppercaseAt,
  lowercaseAt,
  uppercaseAtIndexes,
  lowercaseAtIndexes,
  capitalize,
  toggleCaseAt
} = require('./index.js');

// Test counter
let passed = 0;
let failed = 0;

function test(description, actual, expected) {
  if (actual === expected) {
    console.log(`✓ ${description}`);
    passed++;
  } else {
    console.log(`✗ ${description}`);
    console.log(`  Expected: "${expected}"`);
    console.log(`  Got: "${actual}"`);
    failed++;
  }
}

console.log('Running tests...\n');

// uppercaseAt tests
test('uppercaseAt: first character', uppercaseAt('hello', 0), 'Hello');
test('uppercaseAt: middle character', uppercaseAt('javascript', 4), 'javaScript');
test('uppercaseAt: last character', uppercaseAt('world', 4), 'worlD');
test('uppercaseAt: out of bounds (negative)', uppercaseAt('test', -1), 'test');
test('uppercaseAt: out of bounds (too large)', uppercaseAt('test', 10), 'test');

// lowercaseAt tests
test('lowercaseAt: first character', lowercaseAt('HELLO', 0), 'hELLO');
test('lowercaseAt: middle character', lowercaseAt('JAVASCRIPT', 4), 'JAVAsCRIPT');
test('lowercaseAt: out of bounds', lowercaseAt('TEST', 10), 'TEST');

// uppercaseAtIndexes tests
test('uppercaseAtIndexes: multiple indexes', uppercaseAtIndexes('hello world', [0, 6]), 'Hello World');
test('uppercaseAtIndexes: single index', uppercaseAtIndexes('test', [0]), 'Test');
test('uppercaseAtIndexes: empty array', uppercaseAtIndexes('test', []), 'test');

// lowercaseAtIndexes tests
test('lowercaseAtIndexes: multiple indexes', lowercaseAtIndexes('HELLO WORLD', [1, 2, 7, 8]), 'HelLO WorLD');

// capitalize tests
test('capitalize: lowercase word', capitalize('manoz'), 'Manoz');
test('capitalize: uppercase word', capitalize('HELLO'), 'HELLO');
test('capitalize: empty string', capitalize(''), '');

// toggleCaseAt tests
test('toggleCaseAt: uppercase to lowercase', toggleCaseAt('Hello', 0), 'hello');
test('toggleCaseAt: lowercase to uppercase', toggleCaseAt('hello', 0), 'Hello');
test('toggleCaseAt: middle character', toggleCaseAt('HeLLo', 2), 'HelLo');

console.log(`\n--- Test Results ---`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);

if (failed === 0) {
  console.log('\n✓ All tests passed!');
  process.exit(0);
} else {
  console.log(`\n✗ ${failed} test(s) failed`);
  process.exit(1);
}
