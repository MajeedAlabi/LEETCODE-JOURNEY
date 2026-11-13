// PLAN => fixed-size sliding window + hash map , time complexity of O(nm)
// step 1: create an array to store the starting indices of anagrams
// step 2: check if p is longer than s
// if it is, return the empty result array
// step 3: create a Map to store the frequency of each character in p
// step 4: create another Map to store the frequency of characters in the current window
// step 5: create a pointer to track the beginning of the window
// step 6: loop through s using windowEnd
// step 7: add the incoming character to windowMap
// increase its frequency by 1
// step 8: check if the window size is greater than p.length
// if it is, remove the outgoing character
// decrease its frequency by 1
// delete it if its frequency becomes 0
// move windowStart forward
// step 9: compare the sizes of both Maps
// if they match, compare the frequency of each character
// step 10: if all character frequencies match, add windowStart to result
// step 11: return the result arra

const findAnagrams = (s, p) => {
  const result = [];
  const pMap = new Map();

  if (p.length > s.length) return result;

  for (let i = 0; i < p.length; i++) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
  }

  let windowMap = new Map();
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    // add the incoming character
    windowMap.set(currentChar, (windowMap.get(currentChar) || 0) + 1);

    // keep the window the same size as p
    if (windowEnd - windowStart + 1 > p.length) {
      const outgoingChar = s[windowStart];

      windowMap.set(outgoingChar, windowMap.get(outgoingChar) - 1);

      if (windowMap.get(outgoingChar) === 0) {
        windowMap.delete(outgoingChar);
      }

      windowStart++;
    }

    // compare character frequencies
    if (pMap.size === windowMap.size) {
      let isSame = true;

      for (const [char, count] of windowMap) {
        if (pMap.get(char) !== count) {
          isSame = false;
          break;
        }
      }
      if (isSame) {
        result.push(windowStart);
      }
    }
  }

  return result;
};
