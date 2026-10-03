// PLAN => similar to leetcode
// step 1: pass rowIndex into the function
// step 2: initialize a variable called result and set it to [1]
// HINT: rowIndex 0 means the answer is simply [1]
// step 3: if rowIndex is 0, return result
// HINT: there is no need to build any more rows
// step 4: set result to [1, 1]
// HINT: this is the row at index 1
// step 5: if rowIndex is 1, return result
// HINT: there is no need to build any more rows
// step 6: create a for loop starting from i = 2 and continue while i <= rowIndex
// HINT: we start at 2 because rows 0 and 1 have already been created
// HINT: we use <= because rowIndex is the exact row we want to reach
// step 7: create firstValue and lastValue and set both to 1
// HINT: every Pascal Triangle row starts and ends with 1
// step 8: initialize leftValueIndex to 0
// HINT: this points to the left value of the pair we want to add
// step 9: initialize rightValueIndex to 1
// HINT: this points to the value immediately to the right of leftValueIndex
// step 10: initialize an empty array called add
// HINT: add will store all the calculated middle values
// step 11: create a while loop that continues while rightValueIndex < result.length
// HINT: result is currently the previous Pascal Triangle row
// step 12: add result[leftValueIndex] and result[rightValueIndex] together
// HINT: these are two adjacent values from the previous row
// step 13: push the calculated value into add
// step 14: increase leftValueIndex by 1
// step 15: increase rightValueIndex by 1
// HINT: both indexes move forward together so we always compare adjacent values
// step 16: after the while loop finishes, create the new row using: [firstValue, all values inside add, lastValue ]
// HINT: use the spread operator to insert all values from add into the row
// step 17: replace result with the newly created row
// HINT: we only need to keep the current row, not all previous rows
// step 18: continue the for loop until i reaches rowIndex
// step 19: return result
// HINT: result is now the exact row requested by rowIndex

const getRow = (rowIndex) => {
  let result = [1];

  if (rowIndex === 0) {
    return result;
  }

  result = [1, 1];

  if (rowIndex === 1) {
    return result;
  }

  for (let i = 2; i <= rowIndex; i++) {
    let firstValue = 1;
    let lastValue = 1;

    let leftValueIndex = 0;
    let rightValueIndex = 1;

    let add = [];

    while (rightValueIndex < result.length) {
      add.push(result[leftValueIndex] + result[rightValueIndex]);

      leftValueIndex++;
      rightValueIndex++;
    }

    result = [firstValue, ...add, lastValue];
  }

  return result;
};
