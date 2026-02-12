# String Transform Utils

A lightweight JavaScript utility library for advanced string transformations.

## Installation

```bash
npm install string-transform-utils
```

## Usage

```javascript
const {
  uppercaseAt,
  lowercaseAt,
  uppercaseAtIndexes,
  lowercaseAtIndexes,
  capitalize,
  toggleCaseAt
} = require('string-transform-utils');

// Uppercase character at index
uppercaseAt('hello', 0);  // 'Hello'
uppercaseAt('javascript', 4);  // 'javaScript'

// Lowercase character at index
lowercaseAt('HELLO', 1);  // 'HeLLO'

// Uppercase multiple indexes
uppercaseAtIndexes('hello world', [0, 6]);  // 'Hello World'

// Lowercase multiple indexes
lowercaseAtIndexes('HELLO WORLD', [1, 2, 7, 8]);  // 'HeLlo WOrld'

// Capitalize first letter
capitalize('manoz');  // 'Manoz'

// Toggle case at index
toggleCaseAt('Hello', 0);  // 'hello'
toggleCaseAt('hello', 0);  // 'Hello'
```

## API

### `uppercaseAt(str, index)`

Converts a character at the specified index to uppercase.

- **str** (string): The input string
- **index** (number): The index of the character to uppercase
- **Returns** (string): The modified string

### `lowercaseAt(str, index)`

Converts a character at the specified index to lowercase.

- **str** (string): The input string
- **index** (number): The index of the character to lowercase
- **Returns** (string): The modified string

### `uppercaseAtIndexes(str, indexes)`

Converts characters at multiple indexes to uppercase.

- **str** (string): The input string
- **indexes** (number[]): Array of indexes to uppercase
- **Returns** (string): The modified string

### `lowercaseAtIndexes(str, indexes)`

Converts characters at multiple indexes to lowercase.

- **str** (string): The input string
- **indexes** (number[]): Array of indexes to lowercase
- **Returns** (string): The modified string

### `capitalize(str)`

Capitalizes the first letter of a string.

- **str** (string): The input string
- **Returns** (string): The capitalized string

### `toggleCaseAt(str, index)`

Toggles the case of a character at the specified index.

- **str** (string): The input string
- **index** (number): The index of the character to toggle
- **Returns** (string): The modified string

## Features

✅ Zero dependencies  
✅ Lightweight (~2KB)  
✅ Well tested  
✅ TypeScript support (coming soon)  
✅ Works in Node.js and browsers

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Your Name

## Issues

Report issues at: https://github.com/Manoz-code/string-transform-utils/issues
