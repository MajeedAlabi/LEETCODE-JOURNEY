// PLAN ( APPROACH ONE )
// step 1: pass the arr array into the function
// step 2: calculate the 25% threshold using arr.length / 4
// step 3: initialize left to track the beginning of the current window
// step 4: loop through the array using right as the end of the window
// step 5: check if the current element is different from the next element
// step 6: if the current block has ended, calculate its length using right - left + 1
// step 7: if the window length is greater than the threshold, return the current value
// step 8: otherwise, move left to right + 1 to start the next window

const findSpecialInteger = (arr) => {
  const targetValue = arr.length / 4;
  let count = 0;

  for (let right = 0; right < arr.length; right++) {
    count++;
    if (arr[right] !== arr[right + 1]) {
      if (count > targetValue) {
        return arr[right];
      }

      count = 0;
    }
  }
};

// PLAN ( APPROACH TWO ) => two pointer/sliding window
// step 1: pass the arr array into the function
// step 2: calculate the 25% threshold using arr.length / 4
// step 3: initialize left to track the start of the current window
// step 4: loop through the array using right to track the end of the window
// step 5: check if the current element is different from the next element
// step 6: if they are different, calculate the current window size using right - left + 1
// step 7: if the window size is greater than the threshold, return the current element
// step 8: if the threshold is not met, move left to right + 1 to start the next window
// step 9: return the special integer when its window is found

const findSpecialInteger = (arr) => {
  const targetValue = arr.length / 4;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== arr[right + 1]) {
      const windowSize = right - left + 1;

      if (windowSize > targetValue) {
        return arr[right];
      }

      left = right + 1;
    }
  }
};
