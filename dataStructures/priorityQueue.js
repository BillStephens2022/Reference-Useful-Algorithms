class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// note:  this is structured like a MinBinaryHeap 
// priority 1 is highest priority, priority 2 is lower than 1, etc. So, 
// highest priority has the lowest #.  So, we structure this as a
// MinBinaryHeap so that lowest priority number is removed from queue first.
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  // adds val to end of values array, then calls function "bubbleUp" which
  // will check if val is > parent, and if so swap positions
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // if element less than or equal to the parent, no need to swap, can exit loop.
      if (element.priority >= parent.priority) break;
      // since element must be > parent (by not meeting condition of line above), swap places
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // reset index to the parent so that it can check vs new parent...
      idx = parentIdx;
    }
  }
  dequeue() {
    // swap 1st element with last element, return 1st element(which is the max in the heap)
    const min = this.values[0];
    const end = this.values.pop();
    // below conditional handles edge case when there was only 1 value in array which
    // was popped off in the step above.  this ensures the value doesn't get added back in.
    if (this.values.length > 0) {
      this.values[0] = end;
      // move the new element at index 0 down the heap until it finds its place using
      // the sinkDown method, defined below this...
      this.sinkDown();
    }

    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let emergencyRoom = new PriorityQueue();
emergencyRoom.enqueue("common cold", 5);
emergencyRoom.enqueue("gunshot wound", 1);
emergencyRoom.enqueue("high fever", 4);
emergencyRoom.enqueue("broken arm", 2);
emergencyRoom.enqueue("glass in foot", 3);

console.log(emergencyRoom.values);

// dequeue will remove item with highest priority (remember priority 1 is highest priority)
console.log(emergencyRoom.dequeue().val);  // gunshot wound
console.log(emergencyRoom.values);
console.log(emergencyRoom.dequeue().val);  // broken arm
console.log(emergencyRoom.values);
console.log(emergencyRoom.dequeue().val); // glass in foot
console.log(emergencyRoom.values);