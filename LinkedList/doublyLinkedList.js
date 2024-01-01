// DoublyLinkedList - a linked list that has a reference to the previous node as well as the next node

// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DoublyLinkedList class

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push - add a node to the end of the list
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  // pop - remove a node from the end of the list
  pop() {
    if (!this.head) return undefined;

    let poppedNode = this.tail;
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return poppedNode;
  }

  // shift - remove a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }

  // unshift - add a node to the beginning of the list
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  //get - retrieve a node by it's position in the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let current, count;
    let mid = Math.floor(this.length / 2);

    if (index <= mid) {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // set - change the value of a node based on it's position in the list
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  //insert - add a node to the list at a specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;

    return true;
  }

  //remove - remove a node from the list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;

    return removedNode;
  }
  //print - print the list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }

    return arr;
  }
}

// Tests
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
console.log(list.print());
console.log(list.pop());
console.log(list.print());
console.log(list.shift());
console.log(list.print());
console.log(list.unshift(1));
console.log(list.print());
console.log(list.get(2));
console.log(list.set(2, 10));
console.log(list.print());
console.log(list.insert(2, 3));
console.log(list.print());
console.log(list.remove(2));
console.log(list.print());
