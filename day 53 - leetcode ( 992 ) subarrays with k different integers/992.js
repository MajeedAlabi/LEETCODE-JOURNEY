// PLAN ( APPROACH ONE ) => sliding window + map + window reset => ( NOT RECOMMENDED ) , correct but you will get tle
// time complexity: potentially O(n²)
// space complexity: O(n)
// step 1: create a left pointer to track the beginning of the window
// step 2: create a Map to store the frequency of each integer
// step 3: create a counter to track the number of valid subarrays
// step 4: loop through nums using the right pointer
// step 5: add the current integer to the Map
// increase its frequency by 1
// step 6: check if the Map contains exactly k distinct integers
// if it does, increase the counter by 1
// step 7: check if the Map contains more than k distinct integers
// or if the right pointer reaches the last index
// step 8: reset the right pointer to the current left position
// move left forward
// clear the Map
// step 9: return the counter

const subarraysWithKDistinct = (nums, k) => {
  let left = 0;
  let store = new Map();
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    store.set(nums[right], (store.get(nums[right]) || 0) + 1);

    if (store.size === k) {
      count++;
    }

    if (store.size > k || right === nums.length - 1) {
      right = left;
      left++;
      store.clear();
    }
  }

  return count;
};

// PLAN ( APPROACH  TWO ) => sliding window + hash map + at most k => ( RECOMMENDED )
// time complexity: O(n)
// space complexity: O(n)
// step 1: create a helper function that counts subarrays with at most a given number of distinct integers
// step 2: create a left pointer, a Map and a counter
// step 3: loop through nums using the right pointer
// step 4: add the current number to the Map, increase its frequency by 1
// step 5: check if the Map contains more distinct integers than the allowed limit
// step 6: if it does, shrink the window from the left
// decrease the outgoing number's frequency
// delete it from the Map if its frequency becomes 0
// move the left pointer forward
// step 7: count all valid subarrays ending at the right pointer, add right - left + 1 to the counter
// step 8: return the total number of subarrays
// step 9: call the helper function with k, subtract the result of calling it with k - 1
// step 10: return the difference

const subarraysWithKDistinct = (nums, k) => {
  const countAtMost = (limit) => {
    let left = 0;
    let store = new Map();
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
      const currentNumber = nums[right];

      store.set(currentNumber, (store.get(currentNumber) || 0) + 1);

      while (store.size > limit) {
        const outgoingNumber = nums[left];

        store.set(outgoingNumber, store.get(outgoingNumber) - 1);

        if (store.get(outgoingNumber) === 0) {
          store.delete(outgoingNumber);
        }

        left++;
      }

      count += right - left + 1;
    }

    return count;
  };

  return countAtMost(k) - countAtMost(k - 1);
};
