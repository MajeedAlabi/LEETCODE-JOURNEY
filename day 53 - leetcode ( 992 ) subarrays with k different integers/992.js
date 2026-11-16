// PLAN ( APPROACH ONE ) => sliding window + map + window reset
// incorrect implementation
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
    console.log("store", store);
    console.log("vals", ` left: ${left} right: ${right}`);

    if (store.size === k) {
      count++;
      console.log("i got here", count);
    }

    if (store.size > k || right === nums.length - 1) {
      right = left;
      left++;
      store.clear();
    }
  }

  console.log("first", count);
  return count;
};

subarraysWithKDistinct([2,1,2,1,2], 2);
