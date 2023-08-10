


/* let myArray = [1, 2, "string", true, undefined, { nom: "Pierre", age: 31}]
console.log('arrayBefore ', myArray)
const shiftedElement = myArray.shift();
console.log('arrayAfter ', myArray)
console.log('shiftedElement ',shiftedElement)

myArray.unshift(0);
console.log('arrayAfterUnshift ', myArray) */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//----------------- This is the Linked list Data Structure --------------------------
class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    //O(1)
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    //O(n)
    pop(){
        if(!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }


    //O(1)
    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        temp.next = null
        console.log('TEMP ', temp)
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(value) {
        let current = this.head;
        let currentIndex = 0;

        while (current !== null) {
            if (current.value === value) {
                return currentIndex;
            }
            current = current.next;
            currentIndex++;
        }

        return -1;
    }

    getIndexOf(position) {
        if (position < 0 || position >= this.length ) {
            return undefined;
        }
        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < position) {
            current = current.next;
            currentIndex++
        }

        return current;
    }

    /* insert(value, position) {
        const newNode = new Node(value);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let currentPosition = 0;
            let previous = null;

            while (currentPosition < position && current !== null ) {
                previous = current;
                current = current.next;
                currentPosition++;
            }

            if (currentPosition < position) {
                previous.next = newNode;
            } else {
                previous.next = newNode;
                newNode.next = current;
            }
        }
        this.length++
    } */

    insert(position, value){
        if(position === 0) return this.unshift(value);
        if(position === this.length) return this.push(value)

        const newNode = new Node(value)
        const temp = this.getIndexOf(position - 1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(position) {
        if (position < 0 || position > this.length ) {
            return undefined;
        }

        if (position === 0) return this.shift();
        if (position === this.length) return this.pop();
        const previous = this.getIndexOf(position - 1);
        let current = previous.next;
        previous.next = current.next;
        
        this.length--

    }

    reverse() {
        let current = this.head;
        let previous = null;
        let nextNode = null;

        while (current !== null) {
            nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }

        this.head = previous;
    }


}

let myLinkedList = new LinkedList(14);


/* console.log('afterPush', myLinkedList)
// console.log('afterPush2', JSON.stringify(myLinkedList, null, 2));
myLinkedList.shift();
console.log('AfterShift ', myLinkedList)
myLinkedList.unshift(12);
console.log('GET ', myLinkedList.get(12))
console.log('GET ', myLinkedList.getIndexOf(0))
console.log('unshift ', myLinkedList)
myLinkedList.insert(2, 0)
console.log('insert0 ', myLinkedList)
myLinkedList.remove(-60) */
console.log('LinkedList', JSON.stringify(myLinkedList, null, 2));
myLinkedList.reverse()
console.log('reverse', JSON.stringify(myLinkedList, null, 2));

