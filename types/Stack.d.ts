// types/Stack.d.ts
declare class Stack<T> {
    private items: T[];

    constructor();
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

export default Stack;
