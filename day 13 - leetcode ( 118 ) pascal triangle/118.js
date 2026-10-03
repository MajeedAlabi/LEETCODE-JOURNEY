// PLAN ( APPROACH ONE ) => beginner friendly approach
// step 1: pass numsRow into the function
// step 2: initialize an empty array called result
// HINT: result will store all the rows of Pascal's Triangle
// step 3: if numsRow is greater than or equal to 1, add [1] as the first row
// step 4: if numsRow is greater than or equal to 2, add [1, 1] as the second row
// step 5: create a for loop starting from i = 2 and continue while i < numsRow
// HINT: we start at 2 because the first two rows have already been created
// step 6: inside the loop, create firstValue and lastValue and set both to 1
// HINT: every Pascal row starts and ends with 1
// step 7: get the previous row using result[i - 1] and store it in prevArr
// HINT: we need the previous row to calculate the middle values of the current row
// step 8: check if prevArr.length is equal to 2
// HINT: this means the previous row is [1, 1], so we are creating the third row
// step 9: if prevArr.length is 2, add a new row containing: [firstValue, firstValue + lastValue, lastValue];
// HINT: this creates [1, 2, 1];
// step 10: if prevArr.length is greater than 2, initialize leftValueIndex to 0
// HINT: this index will point to the left value we want to add
// step 11: initialize rightValueIndex to 1
// HINT: this index will point to the value immediately to the right of leftValueIndex
// step 12: initialize an empty array called add
// HINT: add will store all the calculated middle values
// step 13: create a while loop that continues while rightValueIndex is less than prevArr.length
// HINT: we stop when there is no value available at the right index
// step 14: inside the while loop, add the value at leftValueIndex and the value at rightValueIndex together
// HINT: these are two adjacent values from the previous Pascal row
// step 15: push the calculated value into the add array
// step 16: increase leftValueIndex by 1
// step 17: increase rightValueIndex by 1
// HINT: both indexes move forward together so we always compare adjacent values
// step 18: after the while loop finishes, create the current Pascal row
// HINT: the row should contain firstValue, all values inside add, and lastValue
// HINT: use the spread operator to insert all values from add into the row
// step 19: push the newly created row into result
// step 20: continue the for loop until all numsRow rows have been created
// step 21: return result

const generate = (numsRow) => {
  let result = [];
  if (numsRow >= 1) {
    result.push([1]);
  }
  if (numsRow >= 2) {
    result.push([1, 1]);
  }

  // get middle values , this loop doesnt run if numsRow is 1 or 2

  for (let i = 2; i < numsRow; i++) {
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

  return result;
};

// PLAN ( APPROACH 2 )
// step 1: pass numsRow into the function
// step 2: initialize a new variable called result and set it to an empty array
// HINT: result will store every row of Pascal's Triangle
// step 3: create a for loop that runs from i = 0 until i < numsRow
// HINT: each iteration of this loop will create one new row
// step 4: inside the loop, initialize a new variable called currentRow and set it to an empty array
// HINT: currentRow will store the row we are currently building
// step 5: add 1 as the first value of currentRow
// HINT: every row in Pascal's Triangle starts with 1
// step 6: create another for loop to build the middle values of currentRow
// HINT: the middle values are created from the previous row
// HINT: the previous row is stored inside result at index i - 1
// step 7: inside the nested loop, get the previous row from result using i - 1
// HINT: if we are currently creating row 3, the previous row is row 2
// step 8: for each middle position, add two values from the previous row together
// HINT: use previousRow[j - 1] + previousRow[j]
// HINT: for example, if the previous row is [1, 3, 3, 1]:
// HINT: 1 + 3 = 4
// HINT: 3 + 3 = 6
// HINT: 3 + 1 = 4
// step 9: push each calculated middle value into currentRow
// step 10: after all the middle values have been added, add 1 as the last value of currentRow
// HINT: every row after the first row ends with 1
// step 11: push the completed currentRow into result
// HINT: result now contains the rows we have built so far
// HINT: this also makes the currentRow available as the previous row during the next iteration
// step 12: continue the outer loop until we have created numsRow rows
// step 13: return result

const generate = (numRows) => {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const currentRow = [];

    // First value is always 1
    currentRow.push(1);

    // Build the middle values
    for (let j = 1; j < i; j++) {
      const previousRow = result[i - 1];

      currentRow.push(previousRow[j - 1] + previousRow[j]);
    }

    // Last value is always 1
    if (i > 0) {
      currentRow.push(1);
    }

    // Add completed row to result
    result.push(currentRow);
  }

  return result;
};
