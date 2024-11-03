// tests/Stack.test.js
import Stack from '../src/Stack.js';

describe('Stack', () => {
    it('should push items to the stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });

    it('should pop items from the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.peek()).toBe(1);
    });

    it('should return the correct size', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
    });
});
