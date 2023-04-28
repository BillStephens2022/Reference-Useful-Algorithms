class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
}


let g = new Graph();
g.addVertex("Tokyo");
g.addVertex("San Francisco");
console.log(g.adjacencyList);