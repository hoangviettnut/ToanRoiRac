function solveNQueens(n) {
    const result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    function isSafe(row, col) {
        // Kiểm tra cột
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        
        // Kiểm tra đường chéo chính (trái trên)
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        // Kiểm tra đường chéo phụ (phải trên)
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        return true;
    }
    
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    
    return result;
}

const solutions = solveNQueens(10);
console.log(`Tìm thấy ${solutions.length} cách xếp quân hậu trên bàn cờ 10x10 mà không có quân hậu nào ăn được nhau.`);

// In ra một số kết quả
for (let i = 0; i < Math.min(3, solutions.length); i++) {
    console.log(`Solution ${i + 1}:`);
    console.log(solutions[i].join('\n'));
    console.log('\n');
}