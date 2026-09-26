// PLAN ( APPROACH 1 )
// step 1: get the total number of rows of the matrix using matrix.length
// step 2: get the total number of columns of the matrix using matrix[0].length
// step 3: get the total number of diagonal loops of the matrix using (rows + columns) - 1
// step 4: loop through the matrix making diagonal your point of reference, we want to loop the number of total diagonal loops gotten in step 3
// step 5: to get the value of each diagonal, the sum of that particular row and column will equal that specific diagonal
// step 6: in our step 4 loop, we put another loop inside, looping over the rows
// step 7: calculate the column using the formula: column = diagonal - row
// step 8: put a guard in the step 6 loop to make sure the calculated column is within the valid range of the matrix. ie. column >= 0 && column < totalColumns
// step 9: create an empty array for each diagonal so we can temporarily store all the values belonging to that diagonal
// step 10: if the row and column are valid, get the value from  matrix[row][column] and push it into the current diagonal array
// step 11: because the diagonal traversal direction alternates,check if the diagonal number is even using diagonal % 2 === 0
// step 12: if the diagonal is even, reverse the current diagonal array because even-numbered diagonals need to be traversed backwards
// step 13: add the values from the current diagonal into the final result array
// step 14: after all the diagonals have been processed, return the final result

const findDiagonalOrder = (matrix) => {
  const totalRows = matrix.length;
  const totalColumns = matrix[0].length;

  const result = [];

  const totalDiagonalLoops = totalRows + totalColumns - 1;

  for (let diagonal = 0; diagonal < totalDiagonalLoops; diagonal++) {
    const currentDiagonal = [];

    for (let row = 0; row < totalRows; row++) {
      const column = diagonal - row;

      if (column >= 0 && column < totalColumns) {
        currentDiagonal.push(matrix[row][column]);
      }
    }

    if (diagonal % 2 === 0) {
      currentDiagonal.reverse();
    }

    result.push(...currentDiagonal);
  }

  return result;
};

// PLAN ( APPROACH 2 )
// step 1: if the matrix has only one row, return the matrix as a normal flattened array because there is no diagonal direction to manage
// step 2: get the total number of rows using matrix.length
// step 3: get the total number of columns using matrix[0].length
// step 4: create an array containing one empty array for every diagonal using Array.from() and (rows + columns - 1) because that is the total number of diagonals
// step 5: loop through every row using i
// step 6: inside the row loop, loop through every column using j
// step 7: use i + j to determine which diagonal the current matrix value belongs to because cells on the same diagonal have the same row + column
// step 8: check if the diagonal number (i + j) is even or odd using % 2
// step 9: if the diagonal is even, use unshift() to add the current value to the beginning of that diagonal so the values are stored in reverse order
// step 10: if the diagonal is odd, use push() to add the current value to the end of that diagonal so the values remain in normal order
// step 11: after all rows and columns have been processed, use flat() to combine all the individual diagonal arrays into one final array
// step 12: return the flattened result

const findDiagonalOrder = (matrix) => {
  if (matrix.length === 1) return matrix.flat();

  let row = matrix.length;
  let col = matrix[0].length;

  const result = Array.from({ length: row + col - 1 }, () => []);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if ((i + j) % 2 === 0) {
        result[i + j].unshift(matrix[i][j]);
      } else {
        result[i + j].push(matrix[i][j]);
      }
    }
  }

  return result.flat();
};
