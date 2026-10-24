// PLAN
// step 1: pass the strs array into the function
// step 2: create a Map to store each anagram group and an empty result array
// step 3: loop through the strs array
// step 4: sort the characters of the current word and join them into a string to create its key
// step 5: check if the key already exists in the Map
// step 6: if it exists, get the existing group and create a new array containing the existing words and the current word
// step 7: if it doesn't exist, create a new group containing the current word and store it in the Map
// step 8: loop through the Map and add each group to the result array
// step 9: return the result array

const groupAnagrams = (strs) => {
  const store = new Map();
  const result = [];
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (store.has(key)) {
      const value = store.get(key);
      store.set(key, [...value, strs[i]]);
    } else {
      store.set(key, [strs[i]]);
    }
  }

  for (const [key, values] of store) {
    result.push(values);
  }

  return result;
};
