class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add a node to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
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
  // remove the node at the end of the list
  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  // remove a node from the beginning of the list
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // adds a new node at the beginning of the list
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // get an item at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    // if statement used to optimize function - will work from the start if the index is in the first half of the list, otherwise
    // will work from the end.
    if (index < this.length / 2) {
        count = 0;
        current = this.head;
        while (count != index) {
            current = current.next;
            count++;
        }
        return current;
    } else {
        count = this.length - 1;
        current = this.tail;
        while (count != index) {
            current = current.prev;
            count--;
        }
        return current;
    }
  }
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode != null) {
        foundNode.val = val;
        return true;
    }
    return false;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push(150);
list.push(200);
console.log(list);
// list.pop();
// console.log(list);
// list.shift();
// console.log(list);
list.unshift(50);
// console.log(list);
console.log(list.get(4));
console.log(list.get(0));
list.set(0, 25);
console.log(list);