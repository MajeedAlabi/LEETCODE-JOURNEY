// PLAN
// step 1: get the total sum of the array numbers
// step 2: initiate leftSide and rightSide variable to 0
// step 3: loop over the array , the trick is to compare if the rightSide (total - leftSide - numsArray[i]) value is equal leftSide
// step 4: if yes , return i
// step 5: if no , then leftSide's new value becomes leftSide plus the numsArray[i] , then the loop on step 3 continues with leftSide having a new value
// step 5: if the loop finishes and no condition is satisfied , return -1

const pivotIndex = (numsArray) => {
  let total = 0;

  for (let i = 0; i < numsArray.length; i++) {
    total += numsArray[i];
  }

  let leftSide = 0;
  let rightSide = 0;

  for (let i = 0; i < numsArray.length; i++) {
    rightSide = total - leftSide - numsArray[i];

    if (rightSide === leftSide) {
      return i;
    }

    leftSide += numsArray[i];
  }

  return -1;
};
