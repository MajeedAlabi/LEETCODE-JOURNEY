// PLAN ( APPROACH ONE ) => sorting method , time complexity O(nlogn)
// step 1: convert both strings into arrays of characters
// step 2: sort both arrays alphabetically
// step 3: convert both sorted arrays back into strings
// step 4: compare both strings
// step 5: return true if they are equal, otherwise return false

const isAnagram = (s, t) => {
  const sortedS = [...s].sort();
  const sortedT = [...t].sort();

  return sortedS.join("") == sortedT.join("");
};

// PLAN ( APPROACH TWO ) => hashmap , time complexity O(n) , which is better than approach one
// step 1: create a Map to store each character and its frequency
// step 2: check if both strings have the same length
// if they don't, return false
// step 3: loop through the s string
// count how many times each character appears in the Map
// step 4: loop through the t string
// check if the character exists in the Map and its count is greater than 0
// if it doesn't, return false
// otherwise, decrease its count by 1
// step 5: return true if all characters in t were successfully matched

const isAnagram = (s, t) => {
  const store = new Map();

  if (s.length !== t.length) return false;

  for (const char of s) {
    store.set(char, (store.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (store.has(char) && store.get(char) > 0) {
      store.set(char, store.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};
