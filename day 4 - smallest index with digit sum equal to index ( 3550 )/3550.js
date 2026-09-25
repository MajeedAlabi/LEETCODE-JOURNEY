// PLAN ( APPROACH 1 )
// step 1: loop through the array
// step 2: keep two things in mind , current index and the sum of the value of that index (.ie. if the value is 15, then the sum is 6)
// step 3: if multiple scenarios appear in step 2 , return the smallest index as our result ( this wont happen because we are already stopping the loop at the smallest index )
// step 4: if no scenario appear in step 2 , return -1 as our result

const smallestIndex = (numsArray) => {
  for (let i = 0; i < numsArray.length; i++) {
    let indexValue = String(numsArray[i]);
    let sumValue;

    if (indexValue.length > 1) {
      let newValue = indexValue.split("");
      sumValue = newValue.reduce((acc, val) => acc + Number(val), 0);
    } else {
      sumValue = Number(indexValue);
    }

    if (i == sumValue) {
      return i;
    }
  }

  return -1;
};

// PLAN ( APPROACH 2 ) => DRY VERSION AND BETTER
// same as approach 1 but notice we only need one if statement ( because .split can work even if the string is just one character )
// step 1: loop through the array
// step 2: keep two things in mind , current index and the sum of the value of that index (.ie. if the value is 15, then the sum is 6)
// step 3: if multiple scenarios appear in step 2 , return the smallest index as our result ( this wont happen because we are already stopping the loop at the smallest index )
// step 4: if no scenario appear in step 2 , return -1 as our result

const smallestIndex = (numsArray) => {
  for (let i = 0; i < numsArray.length; i++) {
    let indexValue = String(numsArray[i]);
    let sumValue;

    let newValue = indexValue.split("");
    sumValue = newValue.reduce((acc, val) => acc + Number(val), 0);

    if (i == sumValue) {
      return i;
    }
  }

  return -1;
};