function checkWord(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    // Helper function to check if a given cell is a valid starting point
    function isValid(i, j) {
        return i >= 0 && i < rows && j >= 0 && j < cols;
    }
    // Helper function to perform depth-first search on the board
    function dfs(i, j, k) {
        if (k >= word.length) return true;
        if (!isValid(i, j) || board[i][j] !== word[k]) return false;
        const temp = board[i][j];
        board[i][j] = '*'; // Mark the cell as visited
        const found = dfs(i-1, j-1, k+1) || dfs(i-1, j, k+1) || dfs(i-1, j+1, k+1) || dfs(i, j-1, k+1) || dfs(i, j+1, k+1) || dfs(i+1, j-1, k+1) || dfs(i+1, j, k+1) || dfs(i+1, j+1, k+1);
        board[i][j] = temp; // Unmark the cell
        return found;
    }
    
    // Search for the word on each cell of the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) {
            return true;
        }
        }
    }
    
    // The word was not found
    return false;
}
  //by aziz ammar