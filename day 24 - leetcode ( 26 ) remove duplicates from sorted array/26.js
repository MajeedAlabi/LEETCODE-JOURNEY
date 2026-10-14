// PLAN ( APPROACH ONE ) => works but has red flags as stated in the hint , some interviews might not accept it
// step 1: pass the nums array into the function
// step 2: create a left pointer at index 0 and a right pointer at index 1
// step 3: initialize count to 0
// step 4: if nums has at least one element, increment count
// step 5: loop while right is less than the length of nums
// step 6: compare the values at the left and right pointers
// step 7: if the values are different, increment count and move both pointers forward
// step 8: if the values are the same, remove the duplicate at the right pointer
// step 9: return count
// HINT: repeatedly removing elements with splice can cause TLE on large arrays
// HINT: try modifying the array using direct index assignment instead of physically removing elements

const removeDuplicates = (nums) => {
  let left = 0;
  let right = 1;
  let count = 0;

  if (nums.length > 0) {
    count++;
  }
  while (right < nums.length) {
    if (nums[right] !== nums[left]) {
      count++;
      left++;
      right++;
    } else {
      nums.splice(right, 1);
    }
  }
  return count;
};

// PLAN ( APPROACH TWO ) => recommended beginner friendly method , widely accepted
// step 1: pass the nums array into the function
// step 2: if nums is empty, return 0
// step 3: create a left pointer at index 0 to track the last unique element
// step 4: loop through nums with a right pointer starting at index 1
// step 5: compare the value at the right pointer with the value at the left pointer
// step 6: if the values are different, move left one position forward
// step 7: copy the value at right into the new position at left
// step 8: return left + 1 as the number of unique elements
// HINT: use direct index assignment to overwrite duplicates instead of removing elements with splice

const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return left + 1;
};
