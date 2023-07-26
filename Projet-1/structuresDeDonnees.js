


/* let myArray = [1, 2, "string", true, undefined, { nom: "Pierre", age: 31}]
const myArrayIndexOf = myArray.find(el => el === "string");
console.log(myArrayIndexOf) */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 0;
    }
    // Big O Notation : O(1)
    push(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this;
    }

    // Big O Notation : O(n)
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let prev = this.head;
        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        console.log("temp ", temp);
        return temp;
    }
    
}

let myLinkedList = new LinkedList(0);
console.log('beforePush', myLinkedList)

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(4);
myLinkedList.push(6);
myLinkedList.pop(6);


// myLinkedList.push(2);
// myLinkedList.push(3);

// myLinkedList.pop(3)
console.log('afterPush', myLinkedList)

