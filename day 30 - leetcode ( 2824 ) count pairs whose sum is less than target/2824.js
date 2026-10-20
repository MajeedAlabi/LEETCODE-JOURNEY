// PLAN ( APPROACH ONE ) => nested loop
// step 1: pass the nums array and target into the function
// step 2: create a variable to store the last index of nums
// step 3: create a counter initialized to 0 to track the number of valid pairs
// step 4: create a left pointer initialized to the beginning of the array
// step 5: loop while left is less than the last index
// step 6: create a right pointer initialized to the last index
// step 7: loop backwards while right is greater than left
// step 8: calculate the sum of nums[left] and nums[right]
// step 9: if the sum is less than target, increase the counter by 1
// step 10: continue moving right backwards until it reaches left
// step 11: move left forward by 1 and repeat the process
// step 12: return the counter

const countPairs = (nums, target) => {
  const length = nums.length - 1;
  let count = 0;
  let left = 0;

  while (left < length) {
    for (let right = length; right > left; right--) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        count++;
      }
    }

    left++;
  }
  return count;
};
