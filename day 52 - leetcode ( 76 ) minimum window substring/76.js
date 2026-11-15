// PLAN ( APPROACH ONE ) => variable-size sliding window + hash map frequency comparison, correct and beginner friendly ( not reccomended )
// time complexity: O(nm) worst case
// space complexity: O(n + m) worst case

// step 1: check if t is longer than s
// if it is, return an empty string
// step 2: create a Map to store the frequency of each character in t
// step 3: create another Map to store the frequency of characters in the current window
// step 4: create two pointers
// windowStart will track the beginning of the window
// windowEnd will track the end of the window
// step 5: loop through s using windowEnd
// step 6: add the incoming character to sMap
// increase its frequency by 1
// step 7: check if the current window contains all required characters
// compare the frequency of each character in sMap with tMap
// the window is valid when every required frequency is met or exceeded
// step 8: while the window is valid
// calculate its length
// update the shortest window if the current one is smaller
// extract the actual substring from s
// step 9: remove the outgoing character from sMap
// decrease its frequency by 1
// delete it if its frequency becomes 0
// move windowStart forward
// step 10: return the shortest valid substring
// if no valid window was found, return an empty string

const minWindow = (s, t) => {
  if (t.length > s.length) return "";

  const tMap = new Map();

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  const sMap = new Map();

  let windowStart = 0;
  let minLength = Infinity;
  let finalResult = "";

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    // add the incoming character
    sMap.set(currentChar, (sMap.get(currentChar) || 0) + 1);

    // check if the window contains all required characters
    while (true) {
      let isValid = true;

      for (const [char, count] of tMap) {
        if ((sMap.get(char) || 0) < count) {
          isValid = false;
          break;
        }
      }

      if (!isValid) break;

      // calculate the current window length
      const currentLength = windowEnd - windowStart + 1;

      // update the shortest window
      if (currentLength < minLength) {
        minLength = currentLength;
        finalResult = s.slice(windowStart, windowEnd + 1);
      }

      // remove the outgoing character
      const outgoingChar = s[windowStart];

      sMap.set(outgoingChar, sMap.get(outgoingChar) - 1);

      if (sMap.get(outgoingChar) === 0) {
        sMap.delete(outgoingChar);
      }

      windowStart++;
    }
  }

  return finalResult;
};

// PLAN ( APPROACH TWO ) => variable-size sliding window + hash map + matched counter, correct and recommended for interviews
// time complexity: O(n + m)
// space complexity: O(u)
// step 1: check if t is longer than s or if t is empty
// if either condition is true, return an empty string
// step 2: create a Map to store the frequency of each character in t
// step 3: create two pointers
// windowStart will track the beginning of the window
// windowEnd will track the end of the window
// step 4: create a matched counter to track how many required characters have been matched
// step 5: create variables to track the shortest window and the final result
// step 6: loop through s using windowEnd
// step 7: check if the incoming character exists in tMap
// if it does, check if more occurrences are needed
// if they are, increase matched
// decrease its required frequency in tMap
// step 8: while matched equals t.length
// calculate the current window length
// update the shortest window if the current one is smaller
// extract the actual substring from s
// step 9: remove the outgoing character from the window
// if it exists in tMap, check whether removing it breaks the required frequency
// if it does, decrease matched
// increase its required frequency in tMap
// move windowStart forward
// step 10: return the shortest valid substring
// if no valid window was found, return an empty string

const minWindow = (s, t) => {
  if (t.length > s.length || t.length === 0) return "";

  const tMap = new Map();

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  let windowStart = 0;
  let matched = 0;
  let minLength = Infinity;
  let finalResult = "";

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const incomingChar = s[windowEnd];

    // add the incoming character
    if (tMap.has(incomingChar)) {
      if (tMap.get(incomingChar) > 0) {
        matched++;
      }

      tMap.set(incomingChar, tMap.get(incomingChar) - 1);
    }

    // shrink the window while it is valid
    while (matched === t.length) {
      const currentLength = windowEnd - windowStart + 1;

      if (currentLength < minLength) {
        minLength = currentLength;
        finalResult = s.slice(windowStart, windowEnd + 1);
      }

      const outgoingChar = s[windowStart];

      if (tMap.has(outgoingChar)) {
        if (tMap.get(outgoingChar) >= 0) {
          matched--;
        }

        tMap.set(outgoingChar, tMap.get(outgoingChar) + 1);
      }

      windowStart++;
    }
  }

  return finalResult;
};
