// PLAN ( APPROACH ONE )
// step 1: pass the grid array into the function
// step 2: get the number of rows and columns in the grid
// step 3: use a nested loop to go through every cell in the grid
// step 4: check if the next row exists
// step 5: if the next row exists, compare the current value with the value directly below it
// HINT: both values must be equal
// step 6: if the values are not equal, return false
// step 7: check if the next cell to the right exists
// step 8: if the next cell exists, compare the current value with the value to its right
// HINT: both values must be different
// step 9: if the values are equal, return false
// step 10: if all cells pass both conditions, return true

const satisfiesConditions = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i + 1] !== undefined) {
        if (grid[i][j] !== grid[i + 1][j]) {
          return false;
        }
      }

      if (grid[i][j + 1] !== undefined) {
        if (grid[i][j] === grid[i][j + 1]) {
          return false;
        }
      }
    }
  }

  return true;
};

// NOTE: the way we are handling step 4 and step 7 is the only difference between appraoch one and two

// PLAN ( APPROACH 2 )
// step 1: pass the grid array into the function
// step 2: get the number of rows and columns in the grid
// step 3: use a nested loop to go through every cell in the grid
// step 4: check if the next row index is less than the total number of rows
// step 5: if the next row exists, compare the current value with the value directly below it
// HINT: both values must be equal
// step 6: if the values are not equal, return false
// step 7: check if the next column index is less than the total number of columns
// step 8: if the next column exists, compare the current value with the value to its right
// HINT: both values must be different
// step 9: if the values are equal, return false
// step 10: if all cells pass both conditions, return true

const satisfiesConditions = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i + 1 < rows) {
        if (grid[i][j] !== grid[i + 1][j]) {
          return false;
        }
      }

      if (j + 1 < cols) {
        if (grid[i][j] === grid[i][j + 1]) {
          return false;
        }
      }
    }
  }

  return true;
};
