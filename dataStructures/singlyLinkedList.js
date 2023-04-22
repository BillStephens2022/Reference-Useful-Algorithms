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
    traverse() {
      let current = this.head;
      while(current) {
        console.log(current.val);
        current = current.next;
      }
    }
}
let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("how");
first.next.next.next = new Node("are");
first.next.next.next.next = new Node("you");

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("NICE2MEETU");
list.shift();
console.log(list);
list.traverse();
// list.pop();
// console.log(list);
// list.traverse();
// list.pop();
// list.pop();
// console.log(list);
