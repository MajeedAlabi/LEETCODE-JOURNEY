// PLAN ( APPROACH ONE ) => using sort ( beginner friendly even though it is correct and leetcode accepts it , but leetcode says we should try to solve it with linear runtime complexity and constant extra space, so interviewers will be looking out for this )
// step 1: pass the nums array into the function
// step 2: sort the nums array in ascending numerical order
// step 3: loop through the sorted array, moving by 2 positions each time
// step 4: compare the current number with the next number
// step 5: if they are different, return the current number because it is the single number
// step 6: if they are the same, continue to the next pair

const singleNumber = (nums) => {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

// PLAN ( APPROACH TWO ) => using hashset ( beginner friendly even though it is correct and leetcode accepts it , but leetcode says we should try to solve it with linear runtime complexity and constant extra space, so interviewers will be looking out for this )
// step 1: pass the nums array into the function
// step 2: create a Set to store numbers that have appeared an odd number of times
// step 3: loop through the nums array
// step 4: check if the current number already exists in the Set
// step 5: if it exists, remove it because it has appeared twice
// otherwise, add it to the Set
// step 6: return the only number remaining in the Set

const singleNumber = (nums) => {
  const store = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      store.delete(nums[i]);
    } else {
      store.add(nums[i]);
    }
  }

  return [...store][0];
};

// PLAN ( APPRAOCH THREE ) => using hashmap ( beginner friendly even though it is correct and leetcode accepts it , but leetcode says we should try to solve it with linear runtime complexity and constant extra space, so interviewers will be looking out for this )
// step 1: pass the nums array into the function
// step 2: create a Map to store each number and its frequency
// step 3: loop through the nums array
// step 4: check if the current number already exists in the Map
// step 5: if it exists, increase its frequency by 1
// otherwise, add it to the Map with a frequency of 1
// step 6: loop through the Map entries
// step 7: check which number has a frequency of 1
// step 8: return that number

const singleNumber = (nums) => {
  const store = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      let value = store.get(nums[i]);
      store.set(nums[i], value + 1);
    } else {
      store.set(nums[i], 1);
    }
  }

  for (const [key, value] of store) {
    if (value === 1) {
      return key;
    }
  }
};

// PLAN ( APPROACH FOUR ) => using xor ( very complicated but satisfies all leetcode requirements )
// step 1: pass the nums array into the function
// step 2: create a variable called result and initialize it to 0
// step 3: loop through the nums array
// step 4: apply the XOR operator between result and the current number, then store the result back in result
// step 5: return result because duplicate numbers cancel each other out, leaving the number that appears once

const singleNumber = (nums) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
};
