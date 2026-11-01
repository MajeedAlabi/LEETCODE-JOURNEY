// PLAN ( APPRAOCH ONE ) => filtering and reversing , time complexity O(n)
// step 1: create a reference array containing all valid alphanumeric characters
// step 2: create an empty array to store the valid characters from the input string
// step 3: loop through the input string
// convert each character to lowercase
// check if it exists in the reference array
// if it does, add it to the new array
// step 4: convert the new array into a string
// step 5: reverse the array and convert it into a string
// step 6: compare both strings using strict equality
// return true if they match, otherwise return false

const isPalindrome = (s) => {
  const storeReference = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const store2 = [];
  for (const char of s) {
    if (storeReference.includes(char.toLowerCase())) {
      store2.push(char.toLowerCase());
    }
  }

  return store2.join("") === store2.reverse().join("");
};

// PLAN ( APPROACH TWO ) =. two pointer, time complexity O(n)
// step 1: create a reference array containing all valid alphanumeric characters
// step 2: create two pointers
// left starts at the beginning of the string
// right starts at the end of the string
// step 3: loop while left is less than right
// step 4: move left forward while it points to an invalid character
// step 5: move right backwards while it points to an invalid character
// step 6: compare both characters after converting them to lowercase
// if they don't match, return false
// step 7: move left forward and right backwards
// step 8: return true if no mismatches are found

const isPalindrome = (s) => {
  const storeReference = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !storeReference.includes(s[left].toLowerCase())) {
      left++;
    }

    while (left < right && !storeReference.includes(s[right].toLowerCase())) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
