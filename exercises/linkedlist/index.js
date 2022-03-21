// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //!First param is the data(duh!), if the second is NULL than that makes this instance of NODE the TAIL! (no reference to the next node)
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //!the only info the class has is to the head. Class is only aware about where the first item is. The rest is gleaned from the pointers after. STARTs off as NULL!
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size(integer) {
    let counter = 0;
    let node = this.head;
    //! NODE.NEXT will always either be the next node or NULL so the counter will continue to count while there is a value in the .node portion!!
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return;
    let node = this.head;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = null;
    let node = this.head;

    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      }
      previous = node;
      node = node.next;
    }
  }

  insertLast(data) {
    //*this solution worked but for some reason it tripped up future tests.
    // if (!this.head) {
    //   this.head = new Node(data);
    // }
    // let node = this.getLast();
    // node.next = new Node(data);
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //!if GETAT returns false it will go to the second part and GETLAST
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
