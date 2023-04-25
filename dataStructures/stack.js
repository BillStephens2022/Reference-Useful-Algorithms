class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add to beginning of the list (we are calling this push, even though would normally 
  // be unshift with an array);
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return poppedNode.val; 
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


let stack1 = new Stack();
stack1.push("Bill");
stack1.push("Stephens");
stack1.push("is");
stack1.push("a");
stack1.push("programmer");
stack1.push("last item added.");
console.log("This is all of the items pushed into the stack:  ")
stack1.print();

stack1.pop();

console.log("This is the stack with the last item added popped off the stack: ")
stack1.print();
