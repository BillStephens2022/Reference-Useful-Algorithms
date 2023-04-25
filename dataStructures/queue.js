class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size === 0;
  }
  // add to the queue
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // remove from the queue
  dequeue() {
    if (!this.first) return null;
    let removedNode = this.first;
    if(this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }
  print() {
    let arr = [];
    let current = this.first;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let queue = new Queue();
queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");
queue.enqueue("FOURTH");
queue.enqueue("FIFTH");
queue.enqueue("SIXTH");

console.log("queue after all items pushed into queue: ");
queue.print();
queue.dequeue();
console.log("queue after first item removed from queue: ");
queue.print();





