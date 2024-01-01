//stack - linkedList implementation

//Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//Stack class

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //push - add a node to the beginning of the list
  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this;
  }

  //pop - remove a node from the beginning of the list
  pop() {
    if (!this.first) return undefined;

    if (this.size === 1) {
      this.last = null;
    }

    let removedNode = this.first;
    this.first = removedNode.next;
    removedNode.next = null;

    this.size--;

    return removedNode;
  }

  //peek - return the first node's value
  peek() {
    return this.first.value;
  }

  //isEmpty - return true if the stack is empty, else false
  isEmpty() {
    return this.size === 0;
  }

  //size - return the size of the stack
  stackSize() {
    return this.size;
  }

  //printStack - print the stack
  printStack() {
    let str = "";
    let current = this.first;
    while (current) {
      str += current.value + " ";
      current = current.next;
    }
    return str;
  }
}

//test
let stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(3));
console.log(stack.push(4));
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.stackSize());
