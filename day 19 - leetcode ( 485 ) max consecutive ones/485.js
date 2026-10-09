// PLAN
// step 1: pass the nums array into the function
// step 2: create a counter to track the current consecutive ones
// step 3: create an empty result array to store each streak of ones
// step 4: loop through the nums array
// step 5: if the current value is 1, increase the counter by 1
// step 6: if the current value is 0, push the counter into the result array and reset the counter to 0
// step 7: check if we are at the last element of the array and push the final counter into the result array
// HINT: we need this because the last streak might end at the last element without a 0 after it
// step 7: use Math.max(...result) to find the biggest streak and return it
// HINT: Math.max cannot take an array directly, so we use the spread operator (...) to pass each array element as a separate argument
// HINT: we could use result.reduce() to find the biggest streak directly from the array without using the spread operator

const findMaxConsecutiveOnes = (nums) => {
  let counter = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
    } else {
      result.push(counter);
      counter = 0;
    }

    if (i === nums.length - 1) {
      result.push(counter);
    }
  }

  const finalResult = Math.max(...result);
  return finalResult;
};
