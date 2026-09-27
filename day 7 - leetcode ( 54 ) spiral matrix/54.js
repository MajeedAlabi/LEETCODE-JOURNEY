// PLAN
// step 1: get the total number of rows using matrix.length
// step 2: get the total number of columns using matrix[0].length
// step 3: create an empty result array where we will store the elements in spiral order
// step 4: create four boundaries to keep track of the part of the matrix that has not been traversed yet:
// top = first available row
// bottom = last available row
// left = first available column
// right = last available column
// step 5: create a while loop that continues as long as there is still a valid row and column remaining to traverse .ie. top <= bottom && left <= right
// step 6: loop through the top row from left to right and push each element into the result array
// step 7: after traversing the top row, increase top by 1 because that row has now been completely traversed and should not be visited again
// step 8: loop through the right column from top to bottom and push each element into the result array
// step 9: after traversing the right column, decrease right by 1 because that column has now been completely traversed and should not be visited again
// step 10: check if top <= bottom to make sure there is still a row available before traversing the bottom row this prevents us from traversing the same row again when the matrix has only one row remaining
// step 11: if a row is still available, loop through the bottom row from right to left and push each element into the result array
// step 12: after traversing the bottom row, decrease bottom by 1 because that row has now been completely traversed and should not be visited again
// step 13: check if left <= right to make sure there is still a column available before traversing the left column this prevents us from traversing the same column again when the matrix has only one column remaining
// step 14: if a column is still available, loop through the left column from bottom to top and push each element into the result array
// step 15: after traversing the left column, increase left by 1 because that column has now been completely traversed and should not be visited again
// step 16: the while loop now repeats the process using the updated top, bottom, left and right boundaries, which means we move inward and process the next layer of the matrix
// step 17: once top > bottom OR left > right, there are no more untraversed elements, so return the result array

const spiralOrder = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (top <= bottom && left <= right) {
    // LEFT TO RIGHT ( TOP SEQUENCE )
    for (let j = left; j <= right; j++) {
      result.push(matrix[top][j]);
    }
    top++;

    // TOP TO BOTTOM ( RIGHT SEQUENCE )
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // RIGHT TO LEFT ( BOTTOM SEQUENCE ) BACKWARDS
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // BOTTOM TO TOP ( LEFT SEQUENCE ) BACKWARDS
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
