// PLAN
// step 1: pass the s string and indices array into the function
// step 2: create an empty array to store the shuffled characters
// step 3: loop through the indices array
// step 4: use the value at the current index in indices to determine where the current character should be placed in the result array
// step 5: store the current character from s at its correct position in the result array
// step 6: join the result array into a string
// step 7: return the shuffled string

const restoreString = (s, indices) => {
  const result = [];

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};s