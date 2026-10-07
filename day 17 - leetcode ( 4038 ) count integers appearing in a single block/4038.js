// PLAN
// step 1: create an object to keep track of how many blocks each number appears in.
// step 2: create a counter to keep track of the final answer.
// step 3: loop through the array.
// step 4: check if the current number starts a new block.
// If we are at the first index OR the current number is different from the previous number, then a new block has started.
// Step 5: Check if the current number already exists in the object.
// If it doesn't exist, add it with a value of 1.
// If it already exists, increase its block count by 1.
// Step 6: Loop through the object.
// Step 7: Check which numbers have exactly 1 block.
// If the block count is 1, increase the counter.
// Step 8: Return the counter.

const countSpecialIntegers = (nums) => {
  const blocks = {};
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      if (blocks[nums[i]] === undefined) {
        blocks[nums[i]] = 1;
      } else {
        blocks[nums[i]] += 1;
      }
    }
  }

  for (const value in blocks) {
    if (blocks[value] === 1) {
      counter++;
    }
  }

  return counter;
};
