// PLAN
// step 1: pass the s string into the function
// step 2: split the string into an array of words using spaces
// step 3: create an empty array to store the reversed words
// step 4: loop through the array of words
// step 5: convert the current word into an array of characters
// step 6: create a left pointer at index 0 and a right pointer at the last index
// step 7: use a while loop to swap the characters at the left and right pointers
// step 8: move the left pointer forward and the right pointer backward after each swap
// step 9: join the character array back into a string and add it to the result array
// step 10: join the reversed words using a single space
// step 11: return the final string
// HINT: javascript strings are immutable, so convert each word into an array before swapping its characters

const reverseWords = (s) => {
  const newArr = s.split(" ");
  const newArr2 = [];
  for (let i = 0; i < newArr.length; i++) {
    let currentValue = newArr[i].split("");
    if (currentValue.length > 0) {
      let left = 0;
      let right = currentValue.length - 1;

      while (left <= right) {
        let temp = currentValue[left];
        currentValue[left] = currentValue[right];
        currentValue[right] = temp;
        left++;
        right--;
      }
      newArr2.push(currentValue.join(""));
    }
  }
  return newArr2.join(" ");
};
