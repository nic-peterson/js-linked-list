// Nodes for Linked List
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
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
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.size++;
  }

  // prepend(value) adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  // at(index) returns the node at the given index
  at(index) {
    if (index > this.size || index < 0) {
      return "Index out of bounds";
    }

    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
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
      while (current.next.next !== null) {
        current = current.next;
      }
      value = current.next.value;
      current.next = null;
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
      current = current.next;
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
        current = current.next;
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
      current = current.next;
    }
    string += "null";
    return string;
  }

  // insertAt(value, index) that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    if (index == 0) return this.prepend(value);
    if (index == this.size) return this.append(value);

    if (index > this.size || index < 0) {
      return "Index out of bounds";
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }

  // removeAt(index) that removes the node at the given index.
  removeAt(index) {
    if (index > this.size || index < 0) {
      return "Index out of bounds";
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }
}

// Node Tests
// const node = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));

// console.log(node);

const list = new LinkedList();

list.append("one");
list.append("two");
list.append("three");

console.log(list);

list.prepend("zero");

console.log(list);
console.log(list.at(-1));
console.log(list.at(2));

console.log(list.pop());

console.log(list);

console.log(`contains("Zero"): ${list.contains("zero")}`);
console.log(`find("two"): ${list.find("two")}`);

console.log(list.toString());
