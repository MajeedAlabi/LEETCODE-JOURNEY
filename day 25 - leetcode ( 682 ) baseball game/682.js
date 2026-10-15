// PLAN
// step 1: pass the ops array into the function
// step 2: create an empty array to store the valid scores
// step 3: loop through the ops array
// step 4: check the current operation with a switch case statement
// if it is "C", remove the last score
// if it is "D", double the last score and store it
// if it is "+", add the previous two scores and store the sum
// otherwise, convert the current operation to a number and store it
// step 5: calculate the sum of all remaining scores using reduce
// step 6: return the final sum

const calPoints = (ops) => {
  const result = [];

  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "C":
        result.pop();
        break;
      case "D":
        const newValue = result[result.length - 1] * 2;
        result.push(newValue);
        break;
      case "+":
        const anotherValue =
          result[result.length - 1] + result[result.length - 2];
        result.push(anotherValue);
        break;
      default:
        result.push(Number(ops[i]));
    }
  }

  const finalResult = result.reduce((acc, val) => acc + val, 0);
  return finalResult;
};
