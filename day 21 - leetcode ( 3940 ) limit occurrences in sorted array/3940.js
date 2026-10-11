// PLAN ( APPROACH ONE ) => beginner friendly approach 1
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


// PLAN ( APPROACH TWO ) => beginner friendly approach 2 => recommended
// step 1: pass the nums array and k into the function
// step 2: create an empty result array to store the final values
// step 3: create a counter to track the number of times the current value appears consecutively
// step 4: loop through the nums array
// step 5: check if we are at the first element or if the current value is different from the previous value
// step 6: if either condition is true, reset the counter to 1 because a new value has started
// step 7: otherwise, increase the counter by 1 because the current value is the same as the previous value
// step 8: check if the counter is less than or equal to k
// step 9: if the counter is less than or equal to k, push the current value into the result array
// HINT: if the counter is greater than k, skip the current value
// step 10: continue until the loop reaches the end of the nums array
// step 11: return the result array

const limitOccurrences = (nums, k) => {
  const result = [];
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      counter = 1;
    } else {
      counter++;
    }

    if (counter <= k) {
      result.push(nums[i]);
    }
  }

  return result;
};
