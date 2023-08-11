class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.compare(this.root, newNode);
        }
    }

    compare = (node, newNode) => {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
                return;
            } else {
                this.compare(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
                return;
            } else {
                this.compare(node.right, newNode);
            }
        }
    }

    findMin() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while(current.left) {
            current = current.left;
        }

        return current.value;

    }

    findMax() {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while(current.right) {
            current = current.right;
        }

        return current.value;
    }

    search(value) {
        return this.searchRecursive(this.root, value);
    }

    searchRecursive = (node, value) => {
        if (!node) {
            return false;
        }

        if (node.value === value) return true;
        if (value < node.value) {
            return this.searchRecursive(node.left, value);
        } else {
            return this.searchRecursive(node.right, value);
        }
    }



}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(8);
bst.insert(11);
bst.insert(4);
bst.insert(6);
bst.insert(7);
bst.insert(2);
bst.insert(13);
bst.insert(17);
bst.insert(19);
console.log('BST ',bst)
console.log('FindMin ', bst.findMin())
console.log('FindMax ', bst.findMax())
console.log('Search13 ', bst.search(13))
console.log('Search14 ', bst.search(14))
console.log('Search7 ', bst.search(7))
console.log('Search3 ', bst.search(3))