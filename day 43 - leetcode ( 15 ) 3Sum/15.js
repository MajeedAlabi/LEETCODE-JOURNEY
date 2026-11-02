// PLAN
// Step 1: Pass the nums array into the function.
// Step 2: Sort the nums array in ascending order.
// Step 3: Create an empty array to store the final triplets.
// Step 4: Loop through the array.
// Use the current number as the first number in a possible triplet.
// Step 5: Skip the current number if it is the same as the previous number.
// This prevents duplicate triplets.
// Step 6: Create two pointers.
// left starts immediately after the current index.
// right starts at the end of the array.
// Step 7: Loop while left is less than right.
// Step 8: Calculate the sum of the three numbers.
// Add nums[i], nums[left], and nums[right].
// Step 9: If the sum is less than 0,
// move left forward to increase the sum.
// Step 10: If the sum is greater than 0,
// move right backward to decrease the sum.
// Step 11: If the sum is 0,
// add the three numbers to the final result.
// Step 12: Move both pointers inward.
// Step 13: Skip duplicate values at both pointers
// to avoid adding the same triplet again.
// Step 14: Return the final result.

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
