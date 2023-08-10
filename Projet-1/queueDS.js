class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++
    }

    dequeue() {
        if (!this.front) {
            return null;
        }
        const dequeuedNode = this.front;
        this.front = this.front.next;
        if (this.size === 0) {
            this.back = null;
        }
        this.size--;
        console.log('DequeuedNode ', dequeuedNode.value)
        return dequeuedNode.value
    }
}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log('Enqueue ', myQueue);
myQueue.dequeue();
console.log('Dequeue ', myQueue)