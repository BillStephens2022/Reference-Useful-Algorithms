class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // adds a value to the end of a list
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // removes the last item of the list
    pop() {
      if(!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while(current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;  // severs the old tail
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
    // removes the item at the beginning of the list
    shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
    // adds an item to the beginning of the list
    unshift(val) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }    
      this.length++;
      return this;
    }
    // gets an item at a specific index
    get(index) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while(counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
    // updates the value at an index with a new value.
    set(index, val) {
      let foundNode = this.get(index);
      if (foundNode) {
        foundNode.val = val;
        return true;
      }
      return false;
    }
    // adds a node to a list and inserts it into a specific position
    insert(index, val) {
      if (index < 0 || index > this.length) return false;     
      if (index === this.length) return !!this.push(val);   //the "!!" returns true, which means the push worked
      if (index === 0) return !!this.unshift(val);  //the "!!" returns true, which means the unshift worked
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      var temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
    // remove a node from a specific position
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift(val); 
      if (index === this.length - 1) return this.pop(val); 
      
      let previousNode = this.get(index - 1);
      let removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
    }
    // reverse order of items in linked list
    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let next;
      let prev = null;
      for(let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
    // traverses the entire list and console logs each item in the list.
    traverse() {
      let current = this.head;
      while(current) {
        console.log(current.val);
        current = current.next;
      }
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

// shows how you can build a singly linked list by just adding 1 node at a time (which is inefficient with all the dot nexts). 
// better way is to define a class and methods as done above.).
// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("NICE2MEETU");
list.shift();
console.log(list);

// list.pop();
// console.log(list);
// list.traverse();
// list.pop();
// list.pop();
// console.log(list);
list.unshift("SECOND");
list.unshift("FIRST");
list.traverse();
console.log(list.get(3));
list.set(2, "THIRD");
list.insert(2, "TWO AND ONE HALF");
list.insert(0, "ZERO");
list.traverse();
list.remove(3);
list.traverse();
list.reverse();
list.print();
