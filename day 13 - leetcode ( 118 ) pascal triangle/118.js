// PLAN
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