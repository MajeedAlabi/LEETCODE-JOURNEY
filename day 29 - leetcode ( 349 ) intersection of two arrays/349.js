// PLAN ( APPROACH ONE )
// step 1: pass nums1 and nums2 into the function
// step 2: create a Set to store the unique common numbers
// step 3: loop through nums2
// step 4: check if the current number exists in nums1 using includes()
// step 5: if it exists, add it to the Set
// step 6: convert the Set into an array and return it

const intersection = (nums1, nums2) => {
  const result = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (nums1.includes(nums2[i])) {
      result.add(nums2[i]);
    }
  }

  return [...result];
};


// PLAN ( APPROACH TWO ) => recommended because time complexity is optimized
// step 1: pass nums1 and nums2 into the function
// step 2: create a Set from nums1 to allow faster lookups
// step 3: create another Set to store the unique numbers that appear in both arrays
// step 4: loop through nums2
// step 5: check if the current number exists in the nums1 Set using has()
// step 6: if it exists, add the number to the result Set
// step 7: convert the result Set into an array and return it

const intersection = (nums1, nums2) => {
  const values = new Set(nums1);
  const result = new Set();

  for (const num of nums2) {
    if (values.has(num)) {
      result.add(num);
    }
  }

  return [...result];
};
