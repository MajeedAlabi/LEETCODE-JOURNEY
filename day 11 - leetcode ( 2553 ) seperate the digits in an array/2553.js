// PLAN ( APPROACH ONE )
// step 1: pass your nums array into the function
// step 2: initialize an empty array and call the variable 'result'
// step 3: loop over the nums array
// step 4: convert each value to a string using String() , then split it, store the value in variable called seperate
// HINT: we convert to a string first because .split() doesnt work on numbers
// step 5: we push each 'seperate' variable value into our result array
// step 6: after the loop is done , we flatten our array so all elements are bounded by just one array and store the value in modifiedResult
// step 7: we map over modifiedResult and convert each element in the array from a string back to an integer ( because the question states the answer must be an array of integers )
// step 8: we store the step 7 result in a variable called finalResult
// step 9: we return finalResult as our answer

const separateDigits = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const seperate = String(nums[i]).split("");
    result.push(seperate);
  }

  const modifiedResult = result.flat();
  const finalResult = modifiedResult.map((item) => Number(item));

  return finalResult;
};

// PLAN ( APPROACH TWO )
// step 1: pass your nums array into the function
// step 2: initialize an empty array and call the variable 'result'
// step 3: loop over the nums array
// step 4: convert each value to a string using String(), then split it into individual digits and store the value in a variable called separate
// HINT: we convert to a string first because .split() doesn't work on numbers
// step 5: use a nested forOf loop to iterate over each digit in the separate array
// step 6: inside the nested loop, convert each digit from a string back to an integer using Number() and push it directly into the result array
// HINT: we use a nested loop because separate contains individual digits, and we want to push each digit into result one at a time
// HINT: we don't need to use .flat() because we're pushing each digit directly into result instead of pushing the entire separate array
// HINT: we don't need to use .map() because we're converting each digit to a number before pushing it into result
// step 7: once the nested loop finishes, the outer loop moves to the next number in nums and repeats steps 4–6
// step 8: after the outer loop finishes, result contains all the individual digits in the correct order as integers
// step 9: return result as our answer

const separateDigits = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    const seperate = String(nums[i]).split("");
    for (let digit of seperate) {
      result.push(Number(digit));
    }
  }

  return result;
};
