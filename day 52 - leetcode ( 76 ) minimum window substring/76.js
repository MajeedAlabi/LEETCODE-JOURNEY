const minWindow = (s, t) => {
  const tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  let windowStart = 0;
  let sMap = new Map();
  const subStringLength = Infinity;
  const result = [];

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];
    sMap.set(currentChar, (sMap.get(currentChar) || 0) + 1);
    if (windowEnd - windowStart + 1 >= t.length) {
      let isSame = true;
      for (const [char, count] of tMap) {
        if (sMap.get(char) !== count) {
          isSame = false;
          break;
        }else{
            result.push(char)
        }
      }
    }
  }

  return result;
};

minWindow("ADOBECODEBANC", "ABC");
