// PLAN
// step 1: pass the s and t strings into the function
// step 2: create a Map to store the mapping from characters in s to characters in t
// step 3: create another Map to store the mapping from characters in t to characters in s
// step 4: loop through the strings using i as the current index
// step 5: get the current character from s and the current character from t
// step 6: check if the character from s already exists in the first Map and maps to a different character in t
// step 7: check if the character from t already exists in the second Map and maps to a different character in s
// step 8: if either condition is true, return false
// step 9: store the current character mappings in both Maps
// step 10: continue until all characters have been checked
// step 11: return true if no conflicting mappings are found

const isIsomorphic = (s, t) => {
  const sToT = new Map();
  const tToS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (sToT.has(charS) && sToT.get(charS) !== charT) ||
      (tToS.has(charT) && tToS.get(charT) !== charS)
    ) {
      return false;
    }

    sToT.set(charS, charT);
    tToS.set(charT, charS);
  }

  return true;
};