// Plan
// step 1: get the max element in the array using Math.max or .reduce and store in a variable called 'maxNum'
// step 2: get the index of maxNum gotten in step 1 and store in 'maxNumIndex'
// step 3: loop through the array
// step 4: add an if statement inside the loop in step 3 that checks if the current index is maxNumIndex
// step 5: if step 4 is yes , then do nothing and contiue the loop
// step 6: if step 4 is no , then check if the maxNum is less than twice the current index's value , if yes return -1
// step 7: if the condition in the step 6 is not met after the loop ends , then return maxNumIndex

// remember Math.max only works with numbers and not arrays , hence why we have to use the spread operator
// you can also use .reduce() to get the max number

const dominantIndex = (numsArray) => {
  const maxNum = Math.max(...numsArray);
  const maxNumIndex = numsArray.indexOf(maxNum);

  for (let i = 0; i < numsArray.length; i++) {
    if (i !== maxNumIndex) {
      if (maxNum < numsArray[i] * 2) {
        return -1;
      }
    }
  }

  return maxNumIndex;
};
