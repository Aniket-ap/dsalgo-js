// tests/Queue.test.js
import Queue from '../src/Queue.js';

describe('Queue', () => {
    it('should enqueue items to the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.peek()).toBe(1);
    });

    it('should dequeue items from the queue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.peek()).toBe(2);
    });

    it('should return the correct size', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.size()).toBe(2);
    });
});
