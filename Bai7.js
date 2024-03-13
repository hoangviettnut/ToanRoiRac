class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = new Array(vertices).fill(null).map(() => []);
    }

    addEdge(u, v, w) {
        this.graph[u].push({ v, w });
    }

    dijkstraAlgorithm(src) {
        let dist = new Array(this.V).fill(Infinity);
        let visited = new Array(this.V).fill(false);

        dist[src] = 0;

        for (let count = 0; count < this.V - 1; count++) {
            let u = this.minDistance(dist, visited);
            visited[u] = true;

            for (let i = 0; i < this.graph[u].length; i++) {
                let { v, w } = this.graph[u][i];
                if (!visited[v] && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }

        return dist;
    }

    minDistance(dist, visited) {
        let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < this.V; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }

        return minIndex;
    }
}
// Example usage:
let g = new Graph(6);
g.addEdge(0, 1, 5);
g.addEdge(0, 2, 10);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 8);
g.addEdge(2, 3, 1);
g.addEdge(2, 4, 2);
g.addEdge(3, 4, 6);
g.addEdge(4, 5, 4);

let src = 0;
let shortestDistances = g.dijkstraAlgorithm(src);
console.log("Shortest distances from source vertex " + src + ":");
for (let i = 0; i < shortestDistances.length; i++) {
    console.log("Vertex " + i + ": " + shortestDistances[i]);
}