/*
    singleLinkedList - a linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers
*/

//Node Class
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

//LinkedList Class
class singleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push - add a node to the end of the list
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //pop - remove a node from the end of the list
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //shift - remove a node from the beginning of the list
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  //unshift - add a node to the beginning of the list
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  //get - retrieve a node by it's position in the list
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  //set - change the value of a node based on it's position in the list

  set(index, value) {
    let findNode = this.get(index);
    if (findNode) {
      findNode.val = value;
      return true;
    }
    return false;
  }

  //insert - add a node to the list at a specific position
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //remove - remove a node from the list at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return !!this.pop();
    if (index === 0) return !!this.shift();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  //reverse - reverse the list in place
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    this.head = this.tail;
    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  //print - print the list
  print() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log("The list is : ", arr);
  }
}

//test
let list = new singleLinkedList();
list.push("Hello");
list.push("Goodbye");
list.print();
list.unshift("hey");
list.print();
console.log(list.pop());
console.log(list.shift());
//list.reverse();
