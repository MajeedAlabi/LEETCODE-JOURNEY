// PLAN => sliding window plus hashmap 
// step 1: pass the string and the number of allowed replacements into the function
// step 2: create a variable to track the beginning of the window
// step 3: create a Map to keep track of how many times each character appears in the current window
// step 4: create a variable to keep track of the longest valid substring
// step 5: create a variable to track the highest character frequency encountered
// step 6: loop through the string using windowEnd as the right pointer
// step 7: add the current character to the Map and increase its frequency
// step 8: update maxCharCount if the current character's frequency is higher
// step 9: check if the current window is invalid
// a window is invalid when its length minus maxCharCount is greater than k
// step 10: while the window is invalid
// decrease the frequency of the character at windowStart
// move windowStart forward by 1
// step 11: update longestSubString using the current valid window length
// step 12: return longestSubString

const characterReplacement = (s, k) => {
  let windowStart = 0;
  let store = new Map();
  let longestSubString = 0;
  let maxCharCount = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    store.set(s[windowEnd], (store.get(s[windowEnd]) || 0) + 1);
    maxCharCount = Math.max(maxCharCount, store.get(s[windowEnd]));

    while (windowEnd - windowStart + 1 - maxCharCount > k) {
      store.set(s[windowStart], store.get(s[windowStart]) - 1);
      windowStart++;
    }

    longestSubString = Math.max(longestSubString, windowEnd - windowStart + 1);
  }

  return longestSubString;
};
