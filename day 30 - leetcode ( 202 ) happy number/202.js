// PLAN
// step 1: pass n into the function
// step 2: create a Set to keep track of numbers we have already seen
// step 3: loop while n is not equal to 1 and n has not been seen before
// step 4: add the current n to the Set
// step 5: create a variable called sum and initialize it to 0
// step 6: convert n to a string so we can access each digit
// step 7: loop through the digits of n
// step 8: convert each digit to a number, square it, and add it to sum
// step 9: update n with the calculated sum
// step 10: check if n is equal to 1
// step 11: if it is, return true because n is a happy number
// step 12: otherwise, return false because n has entered a cycle

const isHappy = (n) => {
  const testing = new Set();

  while (n !== 1 && !testing.has(n)) {
    testing.add(n);

    let sum = 0;
    const value = String(n);

    for (let i = 0; i < value.length; i++) {
      sum += Number(value[i]) ** 2;
    }

    n = sum;
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
};
