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
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap);
heap.insert(55);
console.log(heap);