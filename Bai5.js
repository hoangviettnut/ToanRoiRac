// Định nghĩa một đồ thị dưới dạng danh sách kề
class Graph {
    constructor() {
      this.adjList = {};
    }
  
    // Thêm một cạnh vào đồ thị
    addEdge(vertex, neighbor) {
      if (!this.adjList[vertex]) {
        this.adjList[vertex] = [];
      }
      this.adjList[vertex].push(neighbor);
    }
  
    // Thuật toán DFS
    dfs(startingNode) {
      const visited = {};
      this._dfsHelper(startingNode, visited);
    }
  
    _dfsHelper(vertex, visited) {
      visited[vertex] = true;
      console.log(vertex);
  
      const neighbors = this.adjList[vertex];
      for (let i = 0; neighbors && i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          this._dfsHelper(neighbor, visited);
        }
      }
    }
  }
  
  // Sử dụng đồ thị và thử nghiệm thuật toán DFS
  const graph = new Graph();
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 2);
  graph.addEdge(2, 0);
  graph.addEdge(2, 3);
  graph.addEdge(3, 3);
  
  console.log("Duyệt đồ thị theo chiều sâu (DFS):");
  graph.dfs(2); // Bắt đầu từ đỉnh 2