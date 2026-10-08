// PLAN => TWO POINTER APPROACH
// step 1: create two pointers
// i will be used to loop through the array
// count will keep track of where the next valid value should be placed
// step 2: loop through the array
// step 3: check if the current value is not equal to the target value
// step 4: if the current value is not equal to the target value, place it at the count position
// step 5: increase count by 1
// step 6: continue until the loop reaches the end of the array
// step 7: return count because it represents the number of values that are not equal to val


const removeElement = (nums, val) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
};
