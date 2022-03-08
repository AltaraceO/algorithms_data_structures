// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  //TODO  learn more about the constructor in a class
  //! in a CLASS whenever a CONSTRUCTOR is called that is used whenever a new instance of that CLASS is called
  constructor() {
    this.dataName = [];
  }

  //!whenever the add method is called it will add the param to the beginning of the this.dataName
  add(record) {
    this.dataName.unshift(record);
  }
  //!removes the last item and RETURN it
  remove() {
    return this.dataName.pop();
  }
}

module.exports = Queue;
