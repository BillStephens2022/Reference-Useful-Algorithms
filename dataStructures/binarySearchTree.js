class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // Breadth First Search (BFS)
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    // while something is in the queue...
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  // Depth First Search (DFS) Pre Order - 
  // root visited first, then visits each node on left, then right
  DFSPreOrder() {
    let data = [];
    let current = this.root;
    // recursive function to traverse left then right on each node.
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return data;
  }
  // Depth First Search (DFS) Post Order - 
  // root visited last, traverses the left then right, and then 
  // visits the node once reaches end node and works its way up.
  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right)
      data.push(node.val);
    }
    traverse(current)
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree);

console.log("Find 11: ", tree.find(11)); // Find 11: Node { val: 11, left: null, right: null }
console.log("Find 2: ", tree.find(2)); // Find 11: Node { val: 2, left: null, right: null }
console.log("Find 5: ", tree.find(5)); // Find 5: Node { val: 5, left: Node { val: 2, left: null, right: null }, right: Node {val: 7, left: null, right: null }}
console.log("Find 100: ", tree.find(100)); // Find 100: undefined

console.log("Breadth First Search (BFS) results: ", tree.BFS()); // [10, 5, 13, 2, 7, 11, 16]
console.log("Depth First Search Pre Order (DFSPreOrder) results: ", tree.DFSPreOrder()); // [10, 5, 2, 7, 13, 11, 16]
console.log("Depth First Search Post Order (DFSPostOrder) results: ", tree.DFSPostOrder()); // [2, 7, 5, 11, 16, 13, 10]
