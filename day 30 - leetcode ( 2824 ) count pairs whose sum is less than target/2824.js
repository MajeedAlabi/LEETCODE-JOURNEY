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

// PLAN ( APPROACH TWO ) => two pointer
// step 1: pass the nums array and target into the function
// step 2: sort nums in non-decreasing order using a numeric comparator
// step 3: create a counter initialized to 0 to track the number of valid pairs
// step 4: create a left pointer initialized to the beginning of the array
// step 5: create a right pointer initialized to the last index of the array
// step 6: loop while left is less than right
// step 7: calculate the sum of nums[left] and nums[right]
// step 8: check if the sum is less than target
// step 9: if it is, add right - left to count because all elements between left and right can form valid pairs with nums[left]
// step 10: move left forward by 1 to check the next element
// step 11: otherwise, move right backward by 1 because the sum is too large
// step 12: return count

const countPairs = (nums, target) => {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }

  return count;
};
