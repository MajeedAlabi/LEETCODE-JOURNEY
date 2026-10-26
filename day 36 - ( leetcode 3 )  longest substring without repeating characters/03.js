// PLAN ( APPRAOCH ONE ) => beginner friendly , easy to read but appraoch two will be better in interviews
// step 1: create a Set to store unique characters in the current substring
// step 2: create a variable to keep track of the maximum substring length
// step 3: create a tracker to represent the starting index of each substring
// step 4: use a while loop to check substrings starting from each position
// step 5: use a for loop to move through the string from the current starting position
// step 6: check if the current character already exists in the Set
// if it exists, stop checking the current substring
// otherwise, add the character to the Set
// step 7: update the maximum length using the size of the Set
// step 8: clear the Set and move the tracker to the next starting position
// step 9: return the maximum length

const lengthOfLongestSubstring = (s) => {
  const result = new Set();
  let maxLeng = 0;
  let tracker = 0;
  while (tracker < s.length) {
    for (let i = tracker; i < s.length; i++) {
      if (result.has(s[i])) {
        break;
      } else {
        result.add(s[i]);
      }
    }
    maxLeng = Math.max(maxLeng, result.size);
    result.clear();
    tracker++;
  }

  return maxLeng;
};

// PLAN ( APPROACH TWO ) => sliding window , preferred in interviews
// step 1: create a Set to store unique characters in the current substring
// step 2: create a left pointer to mark the beginning of the substring
// step 3: create a variable to keep track of the maximum substring length
// step 4: loop through the string using a right pointer
// step 5: check if the current character already exists in the Set
// step 6: while the character exists in the Set, remove the character at the left pointer and move the left pointer forward
// step 7: add the current character to the Set
// step 8: calculate the current substring length using right - left + 1
// step 9: update the maximum length if the current substring is longer
// step 10: return the maximum length

const lengthOfLongestSubstring = (s) => {
  const store = new Set();
  let left = 0;
  let maxLeng = 0;

  for (let right = 0; right < s.length; right++) {
    while (store.has(s[right])) {
      store.delete(s[left]);
      left++;
    }

    store.add(s[right]);
    maxLeng = Math.max(maxLeng, right - left + 1);
  }

  return maxLeng;
};
