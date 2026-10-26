// PLAN
// step 1: create a counter to keep track of the number of jewels found
// step 2: create a Set to store all the characters in jewels
// step 3: loop through jewels and add each character to the Set
// step 4: loop through stones and check if each character exists in the Set
// step 5: if the character exists in the Set, increase the counter by 1
// step 6: return the counter

const numJewelsInStones = (jewels, stones) => {
  let count = 0;
  const jewelStore = new Set();
  // we can use set since the question says all characters in jewels will be unique

  for (let i = 0; i < jewels.length; i++) {
    jewelStore.add(jewels[i]);
  }

  for (const values of stones) {
    if (jewelStore.has(values)) {
      count++;
    }
  }
  return count;
};
