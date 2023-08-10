class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.height = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.height++;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const poppedNode = this.top;
        this.top = poppedNode.next;
        this.height--;
        console.log('PoppedNode ', poppedNode.value)
        return poppedNode.value
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log('Push ', myStack)
myStack.pop()
console.log('Pop ', myStack)