class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}


let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("New York");
g.addVertex("San Francisco");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Aspen", "Dallas");
g.addEdge("Aspen", "San Francisco");
g.addEdge("New York", "San Francisco");
g.addEdge("Dallas", "New York");
g.addEdge("New York", "Tokyo");
console.log(g.adjacencyList);
g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList);
g.removeVertex("Aspen");
console.log(g.adjacencyList);
