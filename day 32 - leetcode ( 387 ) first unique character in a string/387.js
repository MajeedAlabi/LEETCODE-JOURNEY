// PLAN ( APPROACH ONE ) => beginner friendly and easier to read
// step 1: pass the s string into the function
// step 2: create a Map to store each character and its frequency
// step 3: loop through the string
// step 4: check if the current character already exists in the Map
// step 5: if it exists, increase its frequency by 1
// step 6: if it doesn't exist, add it to the Map with a frequency of 1
// step 7: loop through the Map to find the first character with a frequency of 1
// step 8: if a character has a frequency of 1, find its index in the original string and return it
// step 9: if no character has a frequency of 1, return -1

const firstUniqChar = (s) => {
  const store = new Map();

  for (let i = 0; i < s.length; i++) {
    if (store.has(s[i])) {
      const value = store.get(s[i]);
      store.set(s[i], value + 1);
    } else {
      store.set(s[i], 1);
    }
  }

  for (const [key, value] of store) {
    if (value === 1) {
      return s.split("").findIndex((item, index) => item === key);
    }
  }

  return -1;
};

// PLAN ( APPROACH TWO )
// step 1: pass the s string into the function
// step 2: create a Map to store each character, its frequency, and its first index
// step 3: loop through the string
// step 4: check if the current character already exists in the Map
// step 5: if it exists, increase its frequency by 1
// step 6: if it doesn't exist, store it with a frequency of 1 and its current index
// step 7: loop through the Map
// step 8: check if the current character has a frequency of 1
// step 9: if it does, return its stored index
// step 10: if no character has a frequency of 1, return -1

const firstUniqChar = (s) => {
  const store = new Map();

  for (let i = 0; i < s.length; i++) {
    if (store.has(s[i])) {
      store.get(s[i]).count++;
    } else {
      store.set(s[i], { count: 1, index: i });
    }
  }

  for (const [key, value] of store) {
    if (value.count === 1) {
      return value.index;
    }
  }

  return -1;
};
