class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = [];
    }

    addEdge(u, v, w) {
        this.graph.push([u, v, w]);
    }

    find(parent, i) {
        if (parent[i] === i) {
            return i;
        }
        return this.find(parent, parent[i]);
    }

    union(parent, rank, x, y) {
        let xRoot = this.find(parent, x);
        let yRoot = this.find(parent, y);

        if (rank[xRoot] < rank[yRoot]) {
            parent[xRoot] = yRoot;
        } else if (rank[xRoot] > rank[yRoot]) {
            parent[yRoot] = xRoot;
        } else {
            parent[yRoot] = xRoot;
            rank[xRoot]++;
        }
    }

    kruskalAlgorithm() {
        let result = [];
        let i = 0;
        let e = 0;
        this.graph.sort((a, b) => a[2] - b[2]);
        let parent = [];
        let rank = [];

        for (let node = 0; node < this.V; node++) {
            parent[node] = node;
            rank[node] = 0;
        }

        while (e < this.V - 1) {
            let [u, v, w] = this.graph[i++];
            let x = this.find(parent, u);
            let y = this.find(parent, v);

            if (x !== y) {
                e++;
                result.push([u, v, w]);
                this.union(parent, rank, x, y);
            }
        }

        let minimumSpanningTree = [];
        for (let [u, v, weight] of result) {
            minimumSpanningTree.push({ u, v, weight });
        }
        return minimumSpanningTree;
    }
}

// Example usage:
let g = new Graph(4);
g.addEdge(0, 1, 10);
g.addEdge(0, 2, 6);
g.addEdge(0, 3, 5);
g.addEdge(1, 3, 15);
g.addEdge(2, 3, 4);

console.log("Minimum Spanning Tree:");
console.log(g.kruskalAlgorithm());