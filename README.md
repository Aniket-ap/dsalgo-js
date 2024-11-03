# dstruct-js  ![JavaScript](https://img.icons8.com/color/48/000000/javascript.png) ![TypeScript](https://img.icons8.com/color/48/000000/typescript.png)

A lightweight JavaScript package providing Stack and Queue data structures with TypeScript support.

## Tags

🛠️ Data Structures | 📚 Stack | 📦 Queue | 💻 JavaScript | ⚙️ TypeScript | 🚀 Algorithms

> **Note:** This package is still under construction for implementing additional data structures such as Graphs, Trees, and more. Stay tuned for updates!

## Features

- Implementations of Stack and Queue data structures
- TypeScript support for better type safety
- Simple and intuitive API
- Works with both JavaScript and TypeScript

## Installation

You can install `dstruct-js` via npm:

```bash
npm install dstruct-js
```

## Usage
### In JavaScript
```
import { Stack, Queue } from 'dstruct-js';

// Using Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1

// Using Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2
```

### In TypeScript
```
import { Stack, Queue } from 'dstruct-js';

// Using Stack
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.peek()); // 1

// Using Queue
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.peek()); // 2

```

## API
### Stack

- push(value: T): void - Adds an item to the top of the stack.
- pop(): T | undefined - Removes and returns the top item of the  stack.
- peek(): T | undefined - Returns the top item without removing it.
- isEmpty(): boolean - Returns true if the stack is empty.

### Queue
- enqueue(value: T): void - Adds an item to the end of the queue.
- dequeue(): T | undefined - Removes and returns the item at the - front of the queue.
- peek(): T | undefined - Returns the item at the front without removing it.
- isEmpty(): boolean - Returns true if the queue is empty

## Running Tests

To run the tests for this package, you can use:

```bash
npm test
```

## Building the Package

To build the package, run:

```bash
npm run build
```
This will compile the TypeScript code into JavaScript and create a dist folder.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you’d like to contribute to this project, please fork the repository and submit a pull request. Your contributions are welcome!

## Author

- **Aniket Pradhan** - [GitHub Profile](https://github.com/Aniket-ap)

