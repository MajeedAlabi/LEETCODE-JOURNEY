// PLAN ( APPRAOCH ONE ) => not recommended ,it is correct but leetcode wants the solution to be in time complexity better than O(nlogn) , but this solution is O(nlogn) so cant be used
// step 1: create a Map to store each number and how many times it appears
// step 2: loop through the nums array
// step 3: check if the current number already exists in the Map
// if it exists, increase its frequency by 1
// otherwise, add it to the Map with a frequency of 1
// step 4: convert the Map entries into an array
// step 5: sort the array in descending order based on frequency
// step 6: create an empty array to store the top k frequent numbers
// step 7: loop k times and add the number from each of the first k entries to the result
// step 8: return the result

const topKFrequent = (nums, k) => {
  const store = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      let value = store.get(nums[i]);
      store.set(nums[i], ++value);
    } else {
      store.set(nums[i], 1);
    }
  }

  const result = [...store].sort((a, b) => b[1] - a[1]);
  let finalResult = [];

  for (let i = 0; i < k; i++) {
    finalResult.push(result[i][0]);
  }
  return finalResult;
};


// PLAN ( APPROACH TWO ) => recommended appraoch , O(n) time complexity 
// step 1: create a Map to store each number and how many times it appears
// step 2: loop through nums and count the frequency of each number
// step 3: create an empty buckets array
// step 4: use a loop to create nums.length + 1 empty arrays inside buckets
// step 5: loop through the Map and place each number into the bucket matching its frequency
// step 6: create an empty result array to store the k most frequent numbers
// step 7: loop through the buckets from the highest index to the lowest
// step 8: add each number from the current bucket to the result array
// step 9: if the result contains k numbers, return it
// step 10: return the result

const topKFrequent = (nums, k) => {
  const frequencyMap = new Map();

  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  const buckets = [];

  for (let i = 0; i <= nums.length; i++) {
    buckets.push([]);
  }

  for (const [num, frequency] of frequencyMap) {
    buckets[frequency].push(num);
  }

  const result = [];

  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const num of buckets[i]) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
};
