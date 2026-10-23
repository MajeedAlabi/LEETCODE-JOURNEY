// PLAN
// step 1: pass nums1 and nums2 into the function
// step 2: create two Maps to store the frequency of each number in both arrays
// step 3: create an empty array to store the intersection
// step 4: loop through nums1 and count how many times each number appears in store1
// step 5: loop through nums2 and count how many times each number appears in store2
// step 6: loop through store1 to check each number and its frequency
// step 7: check if the current number also exists in store2
// step 8: if it exists, get its frequency from store2
// step 9: find the smaller frequency between both Maps
// step 10: loop that number of times and push the number into the result array
// step 11: return the result array

const intersect = (nums1, nums2) => {
  const store1 = new Map();
  const store2 = new Map();
  const result = [];

  // count the frequency of each number in nums1
  for (const num of nums1) {
    if (store1.has(num)) {
      const value = store1.get(num);
      store1.set(num, value + 1);
    } else {
      store1.set(num, 1);
    }
  }

  // count the frequency of each number in nums2
  for (const num of nums2) {
    if (store2.has(num)) {
      const value = store2.get(num);
      store2.set(num, value + 1);
    } else {
      store2.set(num, 1);
    }
  }

  // find the intersection using the smaller frequency
  for (const [key, value] of store1) {
    if (store2.has(key)) {
      const value2 = store2.get(key);
      const min = Math.min(value, value2);

      for (let i = 0; i < min; i++) {
        result.push(key);
      }
    }
  }

  return result;
};
