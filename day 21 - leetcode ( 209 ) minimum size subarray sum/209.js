// PLAN => TWO POINTER APPROACH
// step 1: pass the nums array and target into the function
// step 2: create a left pointer and set it to 0
// step 3: create a sum variable and set it to 0
// step 4: create a variable to track the minimum subarray length and set it to Infinity
// step 5: loop through the nums array using the right pointer
// step 6: add the current number to the sum
// step 7: while the sum is greater than or equal to the target
// step 8: calculate the current subarray length and update the minimum length
// step 9: subtract the leftmost number from the sum
// step 10: move the left pointer forward to shrink the window
// step 11: return 0 if no valid subarray was found, otherwise return the minimum length

const minSubArrayLen = (target, nums) => {
  let left = 0;
  let sum = 0;
  let minLength = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
