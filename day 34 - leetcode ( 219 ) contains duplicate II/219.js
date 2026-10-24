// PLAN
// step 1: pass the nums array and k into the function
// step 2: create a Map to store each number and its most recent index
// step 3: loop through the nums array using i as the current index
// step 4: check if the current number already exists in the Map
// step 5: if it exists, get its previously stored index
// step 6: calculate the distance between the current index and the previous index
// step 7: if the distance is less than or equal to k, return true
// step 8: store the current number with its current index
// step 9: if the loop finishes without finding a qualifying pair, return false

const containsNearbyDuplicate = (nums, k) => {
  const store = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (store.has(nums[i])) {
      const previousIndex = store.get(nums[i]);
      const distance = i - previousIndex;
      if (distance <= k) {
        return true;
      }
    }
    store.set(nums[i], i);
  }
  return false;
};
