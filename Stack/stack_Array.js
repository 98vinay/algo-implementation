//stack - Array implementation
// Stack is a linear data structure which follows a particular order in which the operations are performed.
// The order may be LIFO(Last In First Out) or FILO(First In Last Out).
// Mainly the following three basic operations are performed in the stack:
// Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
// Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed.
// If the stack is empty, then it is said to be an Underflow condition.
// Peek or Top: Returns top element of stack.
// isEmpty: Returns true if stack is empty, else false.

class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + " ";
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
console.log(stack.push(5));
console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());
