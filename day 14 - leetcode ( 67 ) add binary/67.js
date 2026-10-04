// PLAN ( APPROACH ONE ) => beginner friendly approach
// step 1: pass a and b into the function
// HINT: a and b are binary numbers stored as strings
// step 2: convert a into a BigInt and tell JavaScript that a is a binary value
// HINT: add "0b" before a
// HINT: 0b tells JavaScript that the number is in base 2
// step 3: convert b into a BigInt and tell JavaScript that b is a binary value
// HINT: add "0b" before b
// step 4: add the two BigInt values together
// HINT: BigInt allows us to work with numbers that are too large for JavaScript Number
// step 5: convert the sum back into a binary string
// HINT: use .toString(2)
// HINT: 2 tells JavaScript that we want the result represented in base 2
// step 6: return the binary string as the answer

const addBinary = (a, b) => {
  const newA = BigInt("0b" + a);
  const newB = BigInt("0b" + b);

  const sum = newA + newB;

  const result = sum.toString(2);

  return result;
};

// PLAN ( APPROACH TWO )
// step 1: pass a and b into the function
// HINT: a and b are binary numbers stored as strings
// step 2: initialize an empty array called result
// HINT: we will build the answer from right to left
// step 3: initialize a variable called carry and set it to 0
// HINT: carry stores the extra 1 when two binary digits add up to 2 or 3
// step 4: initialize i to a.length - 1
// HINT: i will point to the last digit of a
// step 5: initialize j to b.length - 1
// HINT: j will point to the last digit of b
// step 6: create a while loop that continues while i >= 0 OR j >= 0 OR carry > 0
// HINT: we continue as long as there is still a digit to process or a carry remaining
// step 7: initialize a variable called digitA and set it to 0
// HINT: if i goes below 0, there is no digit left in a, so we use 0
// step 8: if i is greater than or equal to 0, convert a[i] from a string to a number
// HINT: we need the actual numeric value so we can add it
// step 9: initialize a variable called digitB and set it to 0
// HINT: if j goes below 0, there is no digit left in b, so we use 0
// step 10: if j is greater than or equal to 0, convert b[j] from a string to a number
// step 11: add digitA + digitB + carry and store the result in a variable called sum
// step 12: get the binary digit for the current position using sum % 2
// HINT: 0 % 2 gives 0 and 1 % 2 gives 1
// HINT: this gives us the digit we need to put into the answer
// step 13: push the current binary digit into result
// step 14: calculate the new carry using Math.floor(sum / 2)
// HINT: when sum is 2 or 3, the carry becomes 1
// HINT: when sum is 0 or 1, the carry becomes 0
// step 15: decrease i by 1
// HINT: move to the next digit on the left in a
// step 16: decrease j by 1
// HINT: move to the next digit on the left in b
// step 17: reverse result
// HINT: we built the answer from right to left, so we need to reverse it
// step 18: join result into one string
// step 19: return the final binary string

const addBinary = (a, b) => {
  let result = [];
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digitA = 0;
    let digitB = 0;

    if (i >= 0) {
      digitA = Number(a[i]);
    }

    if (j >= 0) {
      digitB = Number(b[j]);
    }

    const sum = digitA + digitB + carry;

    result.push(sum % 2);

    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  result.reverse();

  return result.join("");
};

// PLAN ( APPROACH THREE ) => RECOMMENDED
// step 1: create an empty array called result
// HINT: we will store each binary digit of our answer inside this array
// step 2: create a variable called carry and set it to 0
// HINT: carry will store the 1 that needs to move to the next position when two digits add up to 2 or 3
// step 3: create two variables called i and j
// HINT: i will start at the last index of a
// HINT: j will start at the last index of b
// step 4: create a while loop that continues while i >= 0 OR j >= 0
// HINT: we use OR because one binary string can be longer than the other
// step 5: inside the loop, create a variable called digitA and set it to 0
// HINT: if we have already passed the beginning of a, we treat the missing value as 0
// step 6: if i >= 0, get the current value from a[i] and convert it to a number
// step 7: create a variable called digitB and set it to 0
// step 8: if j >= 0, get the current value from b[j] and convert it to a number
// step 9: add digitA + digitB + carry and store the result in a variable called sum
// step 10: if sum is 0, put 0 into result and keep carry as 0
// step 11: if sum is 1, put 1 into result and keep carry as 0
// step 12: if sum is 2, put 0 into result and change carry to 1
// HINT: 1 + 1 = 10 in binary
// HINT: we put 0 in the current position and carry 1 to the next position
// step 13: if sum is 3, put 1 into result and keep carry as 1
// HINT: 1 + 1 + 1 = 11 in binary
// HINT: we put 1 in the current position and carry 1 to the next position
// step 14: decrease i by 1
// HINT: move to the next digit on the left in a
// step 15: decrease j by 1
// HINT: move to the next digit on the left in b
// step 16: after the loop finishes, check if carry is 1
// step 17: if carry is 1, put 1 into result
// HINT: this handles situations like 1 + 1 = 10
// step 18: reverse result
// HINT: we built the answer from right to left
// step 19: join result together to create one string
// step 20: return result

const addBinary = (a, b) => {
  let result = [];
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let digitA = 0;
    let digitB = 0;

    if (i >= 0) {
      digitA = Number(a[i]);
    }

    if (j >= 0) {
      digitB = Number(b[j]);
    }

    const sum = digitA + digitB + carry;

    if (sum === 0) {
      result.push(0);
      carry = 0;
    } else if (sum === 1) {
      result.push(1);
      carry = 0;
    } else if (sum === 2) {
      result.push(0);
      carry = 1;
    } else {
      result.push(1);
      carry = 1;
    }

    i--;
    j--;
  }

  if (carry === 1) {
    result.push(1);
  }

  result.reverse();

  return result.join("");
};
