// types/Queue.d.ts
declare class Queue<T> {
    private items: T[];

    constructor();
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

export default Queue;
