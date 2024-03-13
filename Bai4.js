function knapsack(values, weights, capacity) {
    const n = values.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i - 1] <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[n][capacity];
}
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 10;
console.log(knapsack(values, weights, capacity));