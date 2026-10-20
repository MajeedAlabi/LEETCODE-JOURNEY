// PLAN
// step 1: pass the nums array into the function
// step 2: create a variable called result and initialize it to 0 to store the final sum
// step 3: loop through nums using i to represent the starting index of each subarray
// step 4: create a new Set to keep track of the distinct numbers in the current subarray
// step 5: use a nested loop with j starting at i to represent the ending index of each subarray
// step 6: add nums[j] to the Set to keep track of the distinct numbers in the current subarray
// step 7: calculate the square of the number of distinct elements by multiplying distinct.size by itself
// step 8: add the squared value to result
// step 9: continue moving j forward to extend the current subarray and repeat the process
// step 10: move i forward to start generating subarrays from the next index
// step 11: return result after processing all possible subarrays

const sumCounts = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const distinct = new Set();

    for (let j = i; j < nums.length; j++) {
      distinct.add(nums[j]);

      result += distinct.size * distinct.size;
    }
  }

  return result;
};
