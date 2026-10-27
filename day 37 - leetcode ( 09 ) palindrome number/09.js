// PLAN ( APPROACH ONE ) => two pointer , preferred in interviews compared to approach two
// step 1: convert the number x to a string and store it in reference
// step 2: create an empty array to store the reversed characters
// step 3: create two pointers
// left starts at the beginning of the string
// right starts at the end of the string
// step 4: loop while left is less than or equal to right
// step 5: store the character at the left pointer in a temporary variable
// step 6: assign the character at the right pointer to the left index
// assign the temporary character to the right index
// step 7: move left forward and right backward
// step 8: join the array into a string and compare it with the original string
// step 9: return true if both strings are equal, otherwise return false

const isPalindrome = (x) => {
  const reference = String(x);
  let result = [];
  let left = 0;
  let right = reference.length - 1;
  while (left <= right) {
    const first = reference[left];
    result[left] = reference[right];
    result[right] = first;
    left++;
    right--;
  }

  return result.join("") === reference;
};

// PLAN ( APPROACH TWO ) => heavily dependent on javascript methods
// step 1: convert the number x to a string and store it in original
// step 2: split the original string into an array of characters
// step 3: reverse the array of characters and join them back into a string
// step 4: compare the original string with the reversed string
// step 5: return true if both strings are equal, otherwise return false

const isPalindrome = (x) => {
  const original = String(x);
  const reversed = original.split("").reverse().join("");

  return original === reversed;
};
