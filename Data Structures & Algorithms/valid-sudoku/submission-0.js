class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let isValid = true;
        let rows = Array.from({ length: 9 }, () => new Set());
        let colums = Array.from({ length: 9 }, () => new Set());
        let boxes = Array.from({ length: 9 }, () => new Set());
        let row = 0;
        let col = 0;

        while (row < 9 && isValid) {
            while (col < 9 && isValid) {
                if (board[row][col] !== ".") {
                    const boxRow = Math.floor(row / 3); 
                    const boxCol = Math.floor(col / 3);
                    const boxIndex = boxRow * 3 + boxCol;

                    if (rows[row].has(board[row][col])) isValid = false;
                    else if (colums[col].has(board[row][col])) isValid = false;
                    else if (boxes[boxIndex].has(board[row][col])) isValid = false;
                    else {
                        rows[row].add(board[row][col]);
                        colums[col].add(board[row][col]);
                        boxes[boxIndex].add(board[row][col]);
                    }
                }

                col++;
            }
            row++;
            col = 0;
        }

        return isValid;
    }
}
