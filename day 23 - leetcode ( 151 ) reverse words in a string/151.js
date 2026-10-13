// PLAN
// step 1: pass the s string into the function
// step 2: split the string into an array using spaces
// step 3: create an empty array to store the words in reverse order
// step 4: loop backwards through the array starting from the last index
// step 5: check if the current element has a length greater than 0
// step 6: if it is not empty, add it to the new array
// step 7: join the new array into a string using a single space
// step 8: return the result

const reverseWords = (s) => {
  const newArr = s.split(" ");
  const newArr2 = [];
  for (let i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i].length > 0) {
      newArr2.push(newArr[i]);
    }
  }

  const result = newArr2.join(" ");
  return result;
};
