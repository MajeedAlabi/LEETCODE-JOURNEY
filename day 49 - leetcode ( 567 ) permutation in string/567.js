// PLAN ( APPROACH ONE ) => sliding window + sorting , correct ( use approach 2 in interviews ) but not recommended because of time complexity of O(nmlogm)
// IT WILL LEAD TO TLE WHEN SUBMITTING , DO NOT USE
// step 1: pass s1 and s2 into the function
// step 2: check if s1 is longer than s2
// if it is, return false
// step 3: create a variable to store the required window size using s1.length
// step 4: sort s1 and store the result in sortedS1
// step 5: create a pointer to track the beginning of the window
// step 6: loop through s2 using windowEnd as the right pointer
// step 7: check if the current window is larger than the required window size
// if it is, move windowStart forward
// step 8: check if the current window length is equal to the required window size
// step 9: extract the current window, sort its characters and join them into a string
// step 10: compare candidateWindow with sortedS1
// step 11: if both strings are equal, return true
// step 12: continue checking the remaining windows
// step 13: return false if no permutation is found

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const windowSize = s1.length;
  const sortedS1 = s1.split("").sort().join("");

  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    while (windowEnd - windowStart + 1 > windowSize) {
      windowStart++;
    }

    if (windowEnd - windowStart + 1 === windowSize) {
      const candidateWindow = s2
        .slice(windowStart, windowEnd + 1)
        .split("")
        .sort()
        .join("");

      if (candidateWindow === sortedS1) return true;
    }
  }

  return false;
};

// PLAN ( APPROACH TWO ) => fixed-size sliding window + hash map , time complexity of O(nm)
// step 1: check if s1 is longer than s2
// if it is, return false
// step 2: create a Map to store the frequency of each character in s1
// step 3: create another Map to store the frequency of characters in the current window
// step 4: create two pointers
// windowStart will track the beginning of the window
// windowEnd will track the end of the window
// step 5: loop through s2 using windowEnd
// step 6: add the current character to windowMap
// increase its frequency by 1
// step 7: check if the window size is greater than s1.length
// if it is, remove the character at windowStart from windowMap
// decrease its frequency by 1
// delete the character if its frequency becomes 0
// move windowStart forward
// step 8: check if both Maps have the same number of distinct characters
// step 9: if they do, compare the frequency of each character in both Maps
// if every character and its frequency match, return true
// step 10: if the loop finishes without finding a match, return false

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  const s1Map = new Map();

  // count characters in s1
  for (const char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }

  let windowStart = 0;
  const windowMap = new Map();

  for (let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
    const currentChar = s2[windowEnd];

    // add the incoming character
    windowMap.set(currentChar, (windowMap.get(currentChar) || 0) + 1);

    // keep the window the same size as s1
    if (windowEnd - windowStart + 1 > s1.length) {
      const outgoingChar = s2[windowStart];

      windowMap.set(outgoingChar, windowMap.get(outgoingChar) - 1);

      if (windowMap.get(outgoingChar) === 0) {
        windowMap.delete(outgoingChar);
      }

      windowStart++;
    }

    // compare character frequencies
    if (windowMap.size === s1Map.size) {
      let isSame = true;

      for (const [char, count] of s1Map) {
        if (windowMap.get(char) !== count) {
          isSame = false;
          break;
        }
      }

      if (isSame) return true;
    }
  }

  return false;
};
