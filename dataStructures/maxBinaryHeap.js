class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // adds val to end of values array, then calls function "bubbleUp" which
  // will check if val is > parent, and if so swap positions
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // if element less than or equal to the parent, no need to swap, can exit loop.
      if (element <= parent) break;
      // since element must be > parent (by not meeting condition of line above), swap places
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // reset index to the parent so that it can check vs new parent...
      idx = parentIdx;
    }
  }
  extractMax() {
    // swap 1st element with last element, return 1st element(which is the max in the heap)
    const max = this.values[0];
    const end = this.values.pop();
    // below conditional handles edge case when there was only 1 value in array which 
    // was popped off in the step above.  this ensures the value doesn't get added back in.
    if (this.values.length > 0) {
      this.values[0] = end;
      // move the new element at index 0 down the heap until it finds its place using
      // the sinkDown method, defined below this...
      this.sinkDown();
    }
    
    return max;
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
        if (leftChild > element) {
            swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);  // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.extractMax()); // 55
console.log(heap.values); // [41, 39, 33, 18, 27, 12]