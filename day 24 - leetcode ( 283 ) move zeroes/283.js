// PLAN ( APPROACH ONE ) => two pointer , recommended beginner friendly method , widely accepted
// step 1: pass the nums array into the function
// step 2: initialize i and count to 0
// step 3: loop through nums using i
// step 4: check if the current value is not 0
// step 5: if it is not 0, copy it to the position tracked by count
// step 6: increment count after placing each non-zero value
// step 7: increment i to check the next element
// step 8: after the first loop, continue while count is less than the length of nums
// step 9: fill each remaining position with 0 and increment count
// step 10: return the modified nums array
// HINT: use i to read each value and count to track where the next non-zero value should be written

const moveZeroes = (nums) => {
  let i = 0;
  let count = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }

    i++;
  }

  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }

  return nums;
};

// PLAN ( APPROACH TWO ) => works but has red flags as stated in the hint , some interviews might not accept it
// step 1: pass the nums array into the function
// step 2: initialize position and end to 0
// step 3: loop while end is less than the length of nums
// step 4: check if the value at position is 0
// step 5: if it is 0, remove the value using splice and push it to the end of nums
// step 6: if it is not 0, move position forward
// step 7: increment end after each iteration
// step 8: return the modified nums array
// HINT: keep position unchanged when moving a zero so the next value shifted into that position can be checked
// HINT: repeatedly using splice to remove zeros and push them to the end can lead to O(n²) time complexity because elements have to be shifted after each removal
// HINT: modifying the array's length while iterating through it makes pointer and loop control more complicated and increases the chance of skipping elements or processing moved zeros repeatedly
// HINT: the question requires an in-place solution that preserves the relative order of non-zero elements, so make sure your approach satisfies both requirements
// HINT: in an interview, consider whether you can solve the problem in O(n) time with O(1) extra space instead of repeatedly removing and inserting elements

const moveZeroes = (nums) => {
  let position = 0;
  let end = 0;

  while (end < nums.length) {
    if (nums[position] === 0) {
      let value = nums.splice(position, 1);
      nums.push(...value);
    } else {
      position++;
    }

    end++;
  }

  return nums;
};

// PLAN ( APPROACH THREE ) => works but has red flags as stated in the hint , some interviews might not accept it
// step 1: pass the nums array into the function
// step 2: store the length of nums in a variable called length
// step 3: loop through nums using a for loop while i is less than length
// step 4: check if the current value is 0
// step 5: if it is 0, remove it using splice and push it to the end of nums
// step 6: decrement i so the next value shifted into the current position is checked
// step 7: decrement length so zeros already moved to the end are not checked again
// step 8: return the modified nums array
// HINT: track the number of original elements that still need to be checked to avoid processing moved zeros repeatedly
// HINT: repeatedly using splice to remove zeros and push them to the end can lead to O(n²) time complexity because elements have to be shifted after each removal
// HINT: modifying the array's length while iterating through it makes pointer and loop control more complicated and increases the chance of skipping elements or processing moved zeros repeatedly
// HINT: the question requires an in-place solution that preserves the relative order of non-zero elements, so make sure your approach satisfies both requirements
// HINT: in an interview, consider whether you can solve the problem in O(n) time with O(1) extra space instead of repeatedly removing and inserting elements

const moveZeroes = (nums) => {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      const value = nums.splice(i, 1);
      nums.push(...value);
      i--;
      length--;
    }
  }

  return nums;
};
