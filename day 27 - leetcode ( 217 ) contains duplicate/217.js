// PLAN
// step 1: pass the nums array into the function
// step 2: create an empty Set to store unique numbers
// step 3: loop through the nums array
// step 4: get the current number
// step 5: check if the current number already exists in the Set
// step 6: if it exists, return true because a duplicate has been found
// step 7: if it doesn't exist, add the number to the Set
// step 8: return false if the loop finishes without finding a duplicate

const containsDuplicate = (nums) => {
  const store = new Set();

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (store.has(value)) {
      return true;
    } else {
      store.add(value);
    }
  }

  return false;
};
