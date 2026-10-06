// PLAN ( APPROACH ONE )
// step 1: pass the array of strings into the function
// step 2: initialize a variable called tracker and set it to 0
// HINT: tracker will keep track of the character position we are currently checking
// step 3: initialize a variable called currentResult and set it to an empty string
// HINT: this will temporarily store the current prefix we are checking
// step 4: initialize a variable called correctResult and set it to an empty string
// HINT: this will store the last prefix that we confirmed is common to all strings
// step 5: check if the first item in the array is empty
// HINT: if the first string is empty, there cannot be a common prefix
// HINT: return correctResult, which is currently an empty string
// step 6: check if the array contains only one string
// HINT: if there is only one string, the entire string is the common prefix
// HINT: return arr[0]
// step 7: create a while loop that continues while tracker is less than the length of the first string
// HINT: tracker tells us which character position we are currently checking
// HINT: we use arr[0].length because we cannot have a common prefix longer than the first string
// step 8: inside the loop, use .map() to go through every string in the array
// HINT: use .slice(0, tracker + 1) to get the prefix from each string
// HINT: tracker + 1 is used because .slice() does not include the ending index
// step 9: store the prefixes created by .map() in a variable called result
// step 10: use .every() to check if every prefix inside result is equal to result[0]
// HINT: result[0] is the prefix from the first string
// HINT: if every prefix is equal to result[0], then all strings currently have the same prefix
// step 11: store the result of the .every() check in a variable called allSame
// step 12: set currentResult to result[0]
// HINT: result[0] represents the current common prefix we are checking
// step 13: check if allSame is false
// HINT: if the prefixes are no longer the same, we have gone too far
// HINT: return correctResult because it contains the last prefix that was confirmed to be correct
// step 14: if allSame is true, set correctResult to currentResult
// HINT: we have confirmed that this prefix is common to every string
// step 15: increase tracker by 1
// HINT: move to the next character position and check a longer prefix
// step 16: continue the while loop until the prefixes are no longer the same
// HINT: or until we reach the end of the first string
// step 17: after the loop finishes, return correctResult
// HINT: this handles cases where the entire first string is the common prefix

const longestCommonPrefix = (arr) => {
  let tracker = 0;
  let currentResult = "";
  let correctResult = "";

  if (!arr[0]) {
    return correctResult;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  while (tracker < arr[0].length) {
    const result = arr.map((item) => item.slice(0, tracker + 1));
    const allSame = result.every((item) => item === result[0]);
    currentResult = result[0];

    if (!allSame) {
      return correctResult;
    }
    correctResult = currentResult;
    tracker += 1;
  }

  return correctResult;
};

// PLAN ( APPROACH TWO )
// step 1: pass the array of strings into the function
// step 2: if the array is empty, return an empty string
// HINT: there is no common prefix if there are no strings
// step 3: initialize a variable called prefix and set it to arr[0]
// HINT: we will start by assuming the entire first string is the common prefix
// step 4: loop through the array starting from index 1
// HINT: we don't need to compare the first string with itself
// step 5: inside the loop, check if the current string starts with prefix
// HINT: use .startsWith(prefix)
// HINT: if it does, we can continue to the next string
// step 6: if the current string does NOT start with prefix,
// remove the last character from prefix
// HINT: use .slice(0, -1)
// step 7: continue removing the last character from prefix
// HINT: keep doing this until the current string starts with prefix
// HINT: we are making the possible common prefix smaller
// step 8: if prefix becomes an empty string, return ""
// HINT: this means there is no common prefix
// step 9: after comparing all strings, return prefix
// HINT: prefix is now the longest prefix shared by every string

const longestCommonPrefix = (arr) => {
  if (arr.length === 0) {
    return "";
  }

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
};
