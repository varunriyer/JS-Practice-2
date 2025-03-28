class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue(element) {
        return this.isEmpty() ? "Queue is empty" : this.items.shift();
    }
    peek() {
        return this.isEmpty() ? "Queue is empty" : this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    print() {
        console.log(this.items.join(" -> "));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.size());
console.log(queue.peek());