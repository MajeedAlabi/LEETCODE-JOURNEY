// PLAN ( APPROACH ONE ) => beginner friendly , stick to this if approach two is looking complex
// step 1: pass the board into the function
// step 2: get the number of rows and columns in the board
// step 3: create three Sets to track duplicates in rows, columns, and boxes
// step 4: loop through each row and check every cell
// step 5: ignore empty cells represented by "."
// step 6: if a number already exists in rowStore, return false, otherwise add it
// step 7: clear rowStore after checking each row
// step 8: loop through each column and check every cell
// step 9: ignore empty cells represented by "."
// step 10: if a number already exists in colStore, return false, otherwise add it
// step 11: clear colStore after checking each column
// step 12: initialize startRow and startCol to track the starting row and column of each 3 × 3 box
// step 13: loop through the board's 3 × 3 boxes using startRow and startCol
// step 14: check every cell inside the current 3 × 3 box
// step 15: if a number already exists in boxStore, return false, otherwise add it
// step 16: move startCol to the next box and clear boxStore after checking each box
// step 17: when all boxes in the current three rows are checked, move startRow down by 3 and reset startCol to 0
// step 18: return true if no duplicates are found

const isValidSudoku = (board) => {
  // since it is a sudoku , row is 9 .ie. board.length , col is 9 .ie. board[0].length;
  const row = board.length;
  const col = board[0].length;
  const rowStore = new Set();
  const colStore = new Set();
  const boxStore = new Set();

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] !== ".") {
        if (rowStore.has(board[i][j])) {
          return false;
        } else {
          rowStore.add(board[i][j]);
        }
      }
    }
    rowStore.clear();
  }

  for (let j = 0; j < col; j++) {
    for (let i = 0; i < row; i++) {
      if (board[i][j] !== ".") {
        if (colStore.has(board[i][j])) {
          return false;
        } else {
          colStore.add(board[i][j]);
        }
      }
    }
    colStore.clear();
  }

  let startRow = 0;
  let startCol = 0;

  while (startRow < row) {
    if (startCol < col) {
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          if (board[i][j] !== ".") {
            if (boxStore.has(board[i][j])) {
              return false;
            } else {
              boxStore.add(board[i][j]);
            }
          }
        }
      }
      startCol = startCol + 3;
      boxStore.clear();
    } else {
      startRow = startRow + 3;
      startCol = 0;
    }
  }

  return true;
};

// PLAN ( APPROACH TWO ) => complex
// step 1: pass the board into the function
// step 2: create arrays of Sets to track numbers in each row, column, and 3 × 3 box
// step 3: loop through each row and column of the board
// step 4: get the current number from the board
// step 5: if the cell is empty, skip it and move to the next cell
// step 6: calculate the index of the 3 × 3 box containing the current cell
// step 7: check if the number already exists in its row, column, or box
// step 8: if the number already exists in any of them, return false
// step 9: add the number to its row, column, and box Sets
// step 10: return true if no duplicates are found

const isValidSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      if (num === ".") {
        continue;
      }

      // get the index of the 3 × 3 box
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // check if the number already exists
      if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      // store the number in its row, column, and box
      rows[i].add(num);
      cols[j].add(num);
      boxes[boxIndex].add(num);
    }
  }

  return true;
};
