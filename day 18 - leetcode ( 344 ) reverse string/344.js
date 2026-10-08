// PLAN => TWO POINTER APPRAOCH
// step 1: create two pointers.
// i will start from the beginning of the array while j will start from the end of the array.
// step 2: loop through the array while i is less than or equal to j.
// step 3: in the step 2 loop, create a temp variable to store the value at s[i].
// step 4: set s[i] to the value at s[j].
// step 5: set s[j] to the value stored in the temp variable.
// step 6: increase i by 1 and decrease j by 1.
// step 7: continue until the two pointers meet.
// step 8: return the modified "s" array.
// NOTE:
// we cant do this even though it is correct because the question specifically says modify s, not create your own array:
// let result = [];
// result[i] = s[j];
// result[j] = s[i];
// then return result;

const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }

  return s;
};
