// PLAN => greedy + single pass
// time complexity: O(n)
// space complexity: O(1)

// step 1: initialize modified to 0 to keep track of the number of modifications
// step 2: if the nums array length is less than or equal to 2, return true
// step 3: loop through the nums array and compare each element with the next element
// step 4: if the current element is less than or equal to the next element, continue to the next iteration
// step 5: if the current element is greater than the next element, check if we are at index 0 or if the next element is greater than or equal to the previous element
// step 6: if the condition is true, lower the current element by assigning the next element to it
// step 7: otherwise, raise the next element by assigning the current element to it
// step 8: increment modified after each modification
// step 9: if modified is greater than 1, break out of the loop because we have exceeded the allowed modifications
// step 10: return true if modified is less than or equal to 1, otherwise return false

const checkPossibility = (nums) => {
  let modified = 0;
  if (nums.length <= 2) return true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    }

    if (i == 0 || nums[i + 1] >= nums[i - 1]) {
      nums[i] = nums[i + 1];
      modified++;
    } else {
      nums[i + 1] = nums[i];
      modified++;
    }

    if (modified > 1) {
      break;
    }
  }
  return modified <= 1;
};
