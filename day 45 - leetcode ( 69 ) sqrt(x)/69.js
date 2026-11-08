// PLAN ( APPROACH ONE ) => repeated halving + linear search , not recommended ( use approach two ) even though it is correct , but time complexity of O(√x)
// step 1: pass x into the function
// step 2: handle x === 0
// step 3: create variables to track the upper bound, lower bound and middle square
// step 4: repeatedly halve the upper bound
// step 5: calculate the square of the middle number
// step 6: if the middle square is less than x
// save the middle number as the lower bound
// step 7: continue halving until the middle square is less than x
// step 8: start a linear search from the floored lower bound
// step 9: check if the candidate squared is less than or equal to x
// and the next candidate squared is greater than x
// step 10: if both conditions are satisfied, return the candidate
// step 11: otherwise, increase the candidate and repeat

const mySqrt = (x) => {
  if (x === 0) return 0;

  let middleSquare = Infinity;
  let upperBound = x;
  let lowerBound = 0;

  // stage 1: repeatedly halve the upper bound
  while (middleSquare >= x) {
    const middleNumber = upperBound / 2;
    middleSquare = middleNumber * middleNumber;

    if (middleSquare < x) {
      lowerBound = middleNumber;
    }

    upperBound = middleNumber;
  }

  // stage 2: linearly search for the integer square root
  let candidate = Math.floor(lowerBound);

  while (true) {
    if (candidate * candidate <= x && (candidate + 1) * (candidate + 1) > x) {
      return candidate;
    }

    candidate++;
  }
};

// PLAN ( APPROACH TWO ) => binary search, highly recommended , time complecity of O(log x)
// step 1: pass x into the function
// step 2: handle x === 0
// step 3: create two pointers
// left starts at 1
// right starts at x
// step 4: create an answer variable to store the best valid candidate
// step 5: loop while left is less than or equal to right
// step 6: calculate the middle number using left and right
// step 7: calculate the square of the middle number
// step 8: if the middle square is equal to x
// return the middle number
// step 9: if the middle square is less than x
// save the middle number as the current answer
// move left to mid + 1
// step 10: otherwise
// move right to mid - 1
// step 11: repeat until the search range is exhausted
// step 12: return the answer

const mySqrt = (x) => {
  if (x === 0) return 0;

  let left = 1;
  let right = x;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const middleSquare = mid * mid;

    if (middleSquare === x) {
      return mid;
    }

    if (middleSquare < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};
