// PLAN ( APPROACH ONE ) => BEGINNER FRIENDLY
// step 1: pass haystack and needle into the function
// step 2: get the length of needle and store it in a variable called needleLength
// HINT: strings have a .length property, so we don't need to use .split("") to find the length
// HINT: use needle.length instead of needle.split("").length but either works
// step 3: convert haystack into an array using .split("") and store it in haystackArray
// HINT: converting haystack into an array allows us to use .slice() to get a portion of it
// step 4: loop through haystackArray from the first index to the last index
// step 5: inside the loop, use .slice() to get a portion of haystackArray
// HINT: start from the current index i
// HINT: the ending position should be i + needleLength
// HINT: .slice() does NOT modify the original haystackArray
// step 6: store the sliced portion in a variable called result
// step 7: join the values inside result together to create a string
// HINT: use .join("")
// step 8: compare the joined result with needle
// step 9: if result is equal to needle, return the current index i
// HINT: i represents the starting position where needle was found
// step 10: if the loop finishes without finding needle, return -1
// HINT: -1 means needle does not exist inside haystack

const strStr = (haystack, needle) => {
  const needleLength = needle.length;
  const haystackArray = haystack.split("");

  for (let i = 0; i < haystackArray.length; i++) {
    const result = haystackArray.slice(i, i + needleLength);

    if (result.join("") === needle) {
      return i;
    }
  }

  return -1;
};
