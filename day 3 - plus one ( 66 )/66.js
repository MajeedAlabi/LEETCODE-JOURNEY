// PLAN ( APPROACH ONE )
// step 1: convert the array to string using .join
// step 2: convert the string to Number using Number()
// step 2: answer failed because javascript has a limit to Number(), so instead replace step 2 with BigInt() , cause it has no limit
// step 3: increament the number by 1 (if you are using number) , and increament with 1n (if you are using BigInt)
// step 4: convert the number back to string using String()
// step 5: convert the string back to array using .split()
// step 6: since our result must be array of integers and not array of strings , then we map over the array and convert each element to number

const plusOne = (numsArray) => {
  const stringArray = numsArray.join("");
  //   const convertToNumber = Number(stringArray);
  const convertToNumber = BigInt(stringArray);
  const addition = convertToNumber + 1n;
  const convertToString = String(addition);
  const convertToArray = convertToString.split("");

  let finalAnswer = convertToArray.map((element) => {
    return Number(element);
  });

  return finalAnswer;
};

// PLAN ( APPROACH TWO ) => RECOMMENDED
// step 1: loop through the array from last index to first ( reverse of the normal way we know )
// step 2: add one to the current index ( remember we are looping backwards ) if it is less than 9
// step 3: if the current index value is 9 , then make it 0 , and carry the one to the next index value , and continue the cycle
// step 4: when we reach the final index (.ie. index 0) , if the value is less than 9 then add one , if it is not , then make it 0 , and put a integer 1 at the front of the array

// hint: we are doing check in step 4 if not if our input is [9,9] , our output will become [10,0] , but what we want is [1,0,0]

const plusOne = (numsArray) => {
  for (let i = numsArray.length - 1; i >= 0; i--) {
    if (i == 0) {
      if (numsArray[i] < 9) {
        numsArray[i] += 1;
        return numsArray;
      } else {
        numsArray[i] = 0;
        numsArray.unshift(1);
        return numsArray;
      }
    }

    if (numsArray[i] < 9) {
      numsArray[i] += 1;
      return numsArray;
    } else {
      numsArray[i] = 0;
    }
  }
};
