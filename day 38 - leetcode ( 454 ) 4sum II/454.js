// PLAN
// step 1: create a Map to store each sum of nums1 and nums2 and how many times it appears
// step 2: create a counter to keep track of the total number of valid tuples
// step 3: use nested loops to calculate every possible pair sum from nums1 and nums2
// step 4: check if the sum already exists in the Map
// if it exists, increase its count by 1
// otherwise, add it to the Map with a count of 1
// step 5: use nested loops to calculate every possible pair sum from nums3 and nums4
// step 6: calculate the negative of the current pair sum to find the sum needed from nums1 and nums2
// step 7: check if the required sum exists in the Map
// if it exists, add its frequency to the counter
// step 8: return the counter

const fourSumCount = (nums1, nums2, nums3, nums4) => {
  const store = new Map();
  let finalResult = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];

      if (store.has(sum)) {
        store.set(sum, store.get(sum) + 1);
      } else {
        store.set(sum, 1);
      }
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      const target = -sum;

      if (store.has(target)) {
        finalResult += store.get(target);
      }
    }
  }

  return finalResult;
};
