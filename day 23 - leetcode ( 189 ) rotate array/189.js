// PLAN
// step 1: pass the nums array and k into the function
// step 2: get the length of nums
// step 3: calculate the actual number of rotations using k modulo the length of nums, and store in target
// step 4: if the target is 0, return because the array does not need to be rotated
// step 5: use slice to store the last target number of elements in a new array
// step 6: loop backwards through nums starting from the last index down to the target index
// step 7: move each element target positions to the right using direct index assignment
// step 8: loop through the stored last values
// step 9: copy the stored values into the beginning of nums using direct index assignment
// HINT: the original nums array must be modified in-place, so we cannot return a new array as the solution
// HINT: several approaches can produce the correct result, but repeatedly inserting elements at the beginning using unshift or splice can cause TLE on large arrays

const rotate = (nums, k) => {
  const length = nums.length;
  const target = k % length;

  if (target === 0) return;

  const lastValues = nums.slice(length - target);

  for (let i = length - 1; i >= target; i--) {
    nums[i] = nums[i - target];
  }

  for (let i = 0; i < target; i++) {
    nums[i] = lastValues[i];
  }
};
