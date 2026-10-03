// PLAN
// step 1: pass rowIndex into the function
// step 2: initialize an empty array called result
// HINT: result will store all the Pascal Triangle rows we need to build
// step 3: if rowIndex is greater than or equal to 0, add [1] as the first row
// HINT: rowIndex 0 means we need the first row
// step 4: if rowIndex is greater than or equal to 1, add [1, 1] as the second row
// HINT: rowIndex 1 means we need the second row
// step 5: create a for loop starting from i = 2 and continue while i <= rowIndex
// HINT: we start from 2 because rows 0 and 1 have already been created
// HINT: we use <= because rowIndex is the exact row we want to reach
// step 6: inside the loop, create firstValue and lastValue and set both to 1
// HINT: every Pascal Triangle row starts and ends with 1
// step 7: get the previous row using result[i - 1] and store it in prevArr
// HINT: we need the previous row to calculate the middle values
// step 8: check if prevArr.length is equal to 2
// HINT: this means the previous row is [1, 1], so we are creating [1, 2, 1]
// step 9: if prevArr.length is 2, add a new row containing: [firstValue, firstValue + lastValue, lastValue]
// step 10: if prevArr.length is greater than 2, initialize leftValueIndex to 0
// HINT: this points to the left value of the pair we want to add
// step 11: initialize rightValueIndex to 1
// HINT: this points to the value immediately to the right of leftValueIndex
// step 12: initialize an empty array called add
// HINT: add will store the calculated middle values
// step 13: create a while loop that continues while rightValueIndex < prevArr.length
// step 14: add prevArr[leftValueIndex] and prevArr[rightValueIndex]
// HINT: these are two adjacent values from the previous row
// step 15: push the calculated value into add
// step 16: increase leftValueIndex by 1
// step 17: increase rightValueIndex by 1
// HINT: both indexes move forward together to calculate the next pair
// step 18: after the while loop finishes, create the new row using: firstValue + all values inside add + lastValue
// step 19: push the newly created row into result
// step 20: continue the for loop until i reaches rowIndex
// HINT: once the loop finishes, result contains every row from 0 up to rowIndex
// step 21: return the last row in result
// HINT: result[result.length - 1] gives us the requested row

const getRow = (rowIndex) => {
  let result = [];
  if (rowIndex >= 0) {
    result.push([1]);
  }
  if (rowIndex >= 1) {
    result.push([1, 1]);
  }

  // get middle values , this loop doesnt run if rowIndex is 0 or 1

  for (let i = 2; i <= rowIndex; i++) {
    let firstValue = 1;
    let lastValue = 1;
    const prevArr = result[i - 1];

    if (prevArr.length === 2) {
      result.push([firstValue, firstValue + lastValue, lastValue]); // .ie. current pascal row is 3
    } else {
      let leftValueIndex = 0;
      let rightValueIndex = 1;
      let add = [];
      while (rightValueIndex < prevArr.length) {
        add.push(prevArr[leftValueIndex] + prevArr[rightValueIndex]);
        leftValueIndex++;
        rightValueIndex++;
      }

      result.push([firstValue, ...add, lastValue]);
    }
  }

  return result[result.length - 1];
};
