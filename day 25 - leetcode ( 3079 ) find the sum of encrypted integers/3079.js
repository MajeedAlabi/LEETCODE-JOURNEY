// PLAN
// step 1: pass the nums array into the function
// step 2: create a total variable initialized to 0
// step 3: loop through the nums array
// step 4: convert the current number to a string and split it into individual digits
// step 5: find the largest digit in the current number
// step 6: loop through the digits and replace each digit with the largest digit
// step 7: join the digits into a string and convert it back to a number
// step 8: add the encrypted number to the total
// step 9: return the total after processing all numbers

const sumOfEncryptedInt = (nums) => {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    const uniqueElement = String(nums[i]).split("");
    const maxValue = Math.max(...uniqueElement);
    let j = 0;
    while (j < uniqueElement.length) {
      uniqueElement[j] = maxValue;
      j++;
    }

    total += Number(uniqueElement.join(""));
  }

  return total;
};
