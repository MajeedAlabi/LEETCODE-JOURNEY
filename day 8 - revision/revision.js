// PLAN
// Revise everything you have done from day 1 to 7
// Solve each question in 25 minutes or less ( interviews give you around 30 minutes per question )

// 724 = pivot index  => ( completed in 5 minutes )

const pivotIndex = (arr) => {
  const total = arr.reduce((acc, val) => acc + val, 0);
  let leftSide = 0;

  for (let i = 0; i < arr.length; i++) {
    const rightSide = total - leftSide - arr[i];
    if (leftSide === rightSide) {
      return i;
    }

    leftSide += arr[i];
  }

  return -1;
};

// 1991 = find the middle index in array => ( completed in 2 minutes 30 seconds )

const findMiddleIndex = (array) => {
  const total = array.reduce((acc, val) => acc + val, 0);
  let leftSide = 0;

  for (let i = 0; i < array.length; i++) {
    const rightSide = total - leftSide - array[i];
    if (leftSide === rightSide) {
      return i;
    }

    leftSide += array[i];
  }

  return -1;
};

// 747 = largest number at least twice of others => ( completed in 10 minutes )

const dominantIndex = (arr) => {
  const highestNumber = arr.reduce((max, acc) => (max > acc ? max : acc), 0);
  const highestNumberIndex = arr.indexOf(highestNumber);

  for (let i = 0; i < arr.length; i++) {
    if (i !== highestNumberIndex) {
      if (highestNumber < 2 * arr[i]) {
        return -1;
      }
    }
  }

  return highestNumberIndex;
};

// 66 = plus one => ( completed in 7 minutes )

const plusOne = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === 0) {
      if (arr[i] < 9) {
        arr[i] += 1;
        return arr;
      } else {
        arr[i] = 0;
        arr.unshift(1);
        return arr;
      }
    }

    if (arr[i] < 9) {
      arr[i] += 1;
      return arr;
    } else {
      arr[i] = 0;
    }
  }
};

// 3550 = smallest index with digit sum equal to index => ( completed in 9 minutes 30 seconds )

const smallestIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const sumNum = String(arr[i]).split("");
    const result = sumNum.reduce((acc, val) => acc + Number(val), 0);
    if (i === result) {
      return i;
    }
  }

  return -1;
};

// 796 = rotate string => ( completed in 7 minutes )

const rotateString = (string1, string2) => {
  const modified = string1.split("");

  for (let i = 0; i < modified.length; i++) {
    const result = modified.flat().join("");

    if (result === string2) {
      return true;
    }

    const modified2 = modified.splice(0, 1);
    const modified3 = modified.push(modified2);
  }

  return false;
};

// 498 = diagonal traverse => ( completed in 10 minutes )

const findDiagonalOrder = (matrix) => {
  if (matrix.length === 1) return matrix.flat();

  const rows = matrix.length;
  const cols = matrix[0].length;

  const totalDiagonal = rows + cols - 1;
  let result = new Array(totalDiagonal).fill(0).map(() => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const diagonalKey = i + j;
      if (diagonalKey % 2 === 0) {
        result[diagonalKey].unshift(matrix[i][j]);
      } else {
        result[diagonalKey].push(matrix[i][j]);
      }
    }
  }

  return result.flat();
};

// 54 = spiral matrix => ( completed in 23 minutes )

const spiralOrder = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let left = 0;
  let top = 0;
  let right = cols - 1;
  let bottom = rows - 1;

  let result = [];

  while (top <= bottom && left <= right) {
    // TOP TRAVERSE
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // RIGHT TRAVERSE
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // BOTTOM TRAVERSE
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // LEFT TRAVERSE
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
    }
    left++;
  }

  return result;
};
