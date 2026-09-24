// PLAN
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