// PLAN ( APPROACH ONE ) => brute force + two pointers ( NOT RECOMMENDED ), you will get tle
// time complexity: O(n²)
// space complexity: O(1)
// step 1: create two pointers, left and right, initialise both to 0
// step 2: create a variable to store the maximum length, initialise it to 0
// step 3: create a product variable, initialise it to 1
// step 4: loop while right is less than nums.length
// step 5: get the current number at the right pointer, multiply it with the current product
// step 6: check if the product is positive
// if it is, calculate the current subarray length
// update maxLen if the current length is greater
// step 7: check if right has reached the final index
// if it has, move left forward
// reset right to left
// reset product to 1
// step 8: otherwise, move right forward by 1
// step 9: repeat until all starting positions have been checked
// step 10: return maxLen``

const getMaxLen = (nums) => {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let product = 1;

  while (right < nums.length) {
    const currentNumber = nums[right];

    product *= currentNumber;

    if (product > 0) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    if (product === 0) {
      left++;
      right = left - 1;
      product = 1;
    }

    if (right === nums.length - 1) {
      left++;
      right = left;
      product = 1;
    } else {
      right++;
    }
  }

  return maxLen;
};

// PLAN ( APPROACH TWO ) => greedy + negative counting ( recommended )
// time complexity: O(n)
// space complexity: O(1)
// step 1: pass the nums array into the function
// step 2: create left and right pointers, initialise left to 0
// use right to traverse the array
// step 3: create a negativeCount variable, initialise it to 0
// step 4: create firstNegative and lastNegative variables, initialise both to -1
// step 5: create maxLen to store the maximum length, initialise it to 0
// step 6: loop through the nums array using right
// step 7: check if the current number is 0
// reset negativeCount to 0
// reset firstNegative and lastNegative to -1
// move left to the position after the zero
// skip to the next iteration
// step 8: check if the current number is negative
// increase negativeCount by 1
// if firstNegative is still -1, store the current index, update lastNegative to the current index
// step 9: check if negativeCount is even
// if it is, calculate the length of the entire current segment, update maxLen if the length is greater
// step 10: otherwise, calculate two possible lengths
// right - firstNegative
// lastNegative - left
// update maxLen with the largest valid length
// step 11: return maxLen

const getMaxLen = (nums) => {
  let left = 0;
  let negativeCount = 0;
  let firstNegative = -1;
  let lastNegative = -1;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      negativeCount = 0;
      firstNegative = -1;
      lastNegative = -1;
      left = right + 1;
      continue;
    }

    if (nums[right] < 0) {
      negativeCount++;

      if (firstNegative === -1) {
        firstNegative = right;
      }

      lastNegative = right;
    }

    if (negativeCount % 2 === 0) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      maxLen = Math.max(maxLen, right - firstNegative, lastNegative - left);
    }
  }

  return maxLen;
};
