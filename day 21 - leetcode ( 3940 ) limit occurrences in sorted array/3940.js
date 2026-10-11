// PLAN => OBJECT COUNTER APPROACH
// step 1: pass the nums array and k into the function
// step 2: create an empty object to keep track of the number of occurrences of each value
// step 3: create an empty array to store the final result
// step 4: loop through the nums array
// step 5: compare the current value with the previous value
// step 6: if the current value is different from the previous value, set it's count to 1
// step 7: if the current value is the same as the previous value, increase its count by 1
// HINT: this works because the nums array is sorted, so equal values appear next to each other
// step 8: loop through the result object
// step 9: check if the occurrence count of the current value is greater than k
// step 10: if the count is greater than k, reduce it to k
// step 11: loop through the occurrence count and push the current value into the final result array
// step 12: convert the object key back to a number before pushing it into the final result array
// step 13: return the final result array

const limitOccurrences = (nums, k) => {
  let result = {};
  let finalResult = [];

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    let previousValue = nums[i - 1];
    if (currentValue !== previousValue) {
      result[currentValue] = 1;
    } else {
      result[currentValue] += 1;
    }
  }

  for (let value in result) {
    if (result[value] > k) {
      result[value] = k;
    }

    for (let i = 0; i < result[value]; i++) {
      finalResult.push(Number(value));
    }
  }

  return finalResult;
};
