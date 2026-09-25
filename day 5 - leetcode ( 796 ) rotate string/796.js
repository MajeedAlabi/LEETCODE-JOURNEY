// PLAN
// step 1: pass the two variables (variableA, variableB) into the function
// step 2: keep one variable as the point of reference , while we modify the other variable
// step 3: we split the modified variable with .split() making it an array of strings
// step 4: we loop over the modified variable array and creates a finalArray which converts our modifiedVariable from array back to string
// step 5: on the first iteration we check if variableA is equal to finalArray , if yes return true 
// step 6: if no , use .splice() to remove the first value (index 0) of the modifiedVariable and store it as firstValue
// step 7: we use .join() on firstValue to convert it from array back to string then add to the back to the modified array
// step 8: we can add to the back of the array using .splice(),.push(), or [...oldArray, newValue]
// step 9: we now convert our modifiedVariable to a string using the .join() and stored it in a new variable called finalArray
// step 10: then our loop continues back to step 5
// step 11: if no conditions are satisfied , return false

// HINT : look at step 8

const rotateString = (variableA, variableB) => {
  const modifiedVariable = variableB.split("");
  for (let i = 0; i < modifiedVariable.length; i++) {
    let finalArray = modifiedVariable.join("");
    if (variableA === finalArray) {
      return true;
    }
    let firstValue = modifiedVariable.splice(0, 1).join("");
    modifiedVariable.push(firstValue);
  }
  return false;
};