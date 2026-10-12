// PLAN
// step 1: pass the nums array and k into the function
// step 2: create an empty object to keep track of the number of occurrences of each value
// step 3: create a sum variable and set it to 0
// step 4: loop through the nums array
// step 5: check if the current value already exists in the object
// step 6: if the current value does not exist in the object, set its count to 1
// step 7: if the current value already exists in the object, increase its count by 1
// HINT: we do not need to sort the array because the object tracks each value regardless of its position
// step 8: loop through the object to check the frequency of each value
// step 9: check if the frequency of the current value is divisible by k
// step 10: if the frequency is divisible by k, multiply the value by its frequency and add it to the sum
// step 11: return the sum

const sumDivisibleByK = (nums, k) => {
  let block = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i];
    if (block[currentValue] === undefined) {
      block[currentValue] = 1;
    } else {
      block[currentValue]++;
    }
  }

  for (let value in block) {
    if (block[value] % k === 0) {
      sum += value * block[value];
    }
  }

  return sum;
};
