


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
        return temp
    }

}

let myLinkedList = new LinkedList(14);
console.log('beforePush', myLinkedList)



