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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);  //double ! returns boolean: true if it worked
    if (index === this.length) return !!this.push(val); //double ! returns boolean: true if it worked
    
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    this.length++
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length -  1) return this.pop();
    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;


  }
  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
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
list.print();
list.insert(3, 125);
list.print();
list.remove(1);
list.print();