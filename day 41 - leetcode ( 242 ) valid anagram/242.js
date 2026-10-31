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