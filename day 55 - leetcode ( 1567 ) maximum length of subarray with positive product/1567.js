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
