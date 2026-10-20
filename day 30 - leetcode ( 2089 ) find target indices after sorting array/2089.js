// PLAN
// step 1: pass the nums array and target into the function
// step 2: sort nums in non-decreasing order using a numeric comparator
// HINT: javascript's default sort() compares elements as strings, not numbers
// for numerical ascending order, use sort((a, b) => a - b)
// for numerical descending order, use sort((a, b) => b - a)
// using just sort(); will mess up an array like [1,2,10,4], because it's default is string , the response will be [1,10,2,4] , see where the 10 is placed
// step 3: create an empty array to store the target indices
// step 4: loop through the sorted nums array
// step 5: check if the current number is equal to target
// step 6: if it is, add the current index to the result array
// step 7: return the result array

const targetIndices = (nums, target) => {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }
  return result;
};
