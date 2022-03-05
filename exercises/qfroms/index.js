// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    //!When we create an instance of a Q it will automatically generate 2 new stacks!
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(record) {
    this.firstStack.push(record);
  }

  remove() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
    //!dont immediately return because we want to restore everything back to its rightful place in stack one!
    const toBeReturned = this.secondStack.pop();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return toBeReturned;
  }

  peek() {
    //!exactly the same as the remove just instead of returning POP we will return a variable that saved the PEEK!
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }

    const toBeReturned = this.secondStack.peek();

    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }

    return toBeReturned;
  }
}

module.exports = Queue;
