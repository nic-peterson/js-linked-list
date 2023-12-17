// Nodes for Linked List
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  // append(value) adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
    this.size++;
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  // size returns the total number of nodes in the list
  size() {
    return this.size;
  }

  // head returns the first node in the list
  head() {
    return this.head;
  }

  // tail returns the last node in the list
  tail() {
    if (this.size === 0) {
      return "List is empty";
    }
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // at(index) returns the node at the given index
  at(index) {
    if (index >= this.size || index < 0) {
      return "Index out of bounds";
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.nextNode;
      count++;
    }
    return current;
  }

  // pop removes the last element from the list
  pop() {
    if (this.size === 0) {
      throw new Error("List is empty");
    }

    let value;
    if (this.size === 1) {
      value = this.head.value;
      this.head = null;
    } else {
      let current = this.head;
      while (current.nextNode.nextNode !== null) {
        current = current.nextNode;
      }
      value = current.nextNode.value;
      current.nextNode = null;
    }
    this.size--;
    return value;
  }

  // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    if (this.contains(value)) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
        if (current.value === value) {
          return index;
        }
        current = current.nextNode;
        index++;
      }
    } else {
      return null;
    }
  }

  // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.head;
    let string = "";
    while (current !== null) {
      string += `(${current.value}) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index == 0) return this.prepend(value);
    if (index == this.size) return this.append(value);

    if (index >= this.size || index < 0) {
      return "Index out of bounds";
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this.size++;
  }

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index >= this.size || index < 0) {
      return "Index out of bounds";
    }

    if (index === 0) {
      this.head = this.head.nextNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.nextNode;
      }
      current.nextNode = current.nextNode.nextNode;
    }
    this.size--;
  }
}
