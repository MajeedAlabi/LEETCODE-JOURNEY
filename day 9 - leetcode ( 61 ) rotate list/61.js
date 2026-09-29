// PLAN ( I FAILED THIS PROBLEM BECAUSE I TREATED IT AS AN ARRAY INSTEAD OF LINKED LIST, COME BACK AFTER YOU HAVE LEARNT LINKED LIST )
// step 1: pass your arr variable and target variable into the function
// step 2: make the arr variable of numbers become an arr variable of strings
// step 3: loop through the step 2 array by the number of target passed into the function
// step 4: create a variable that tracks the number of loop done , call it tracker
// step 5: put step 3 loop in a while loop condition while tracker <= target
// step 6: after each loop done in step 3 , we incremet tracker by one
// step 7: inside the step 3 loop , we always pop the last value then unshift it to the front
// step 8: after the tracker <= target condition is satisfied , then we stop our loop and return our array back in the form of array of numbers

const rotateRight = (arr, target) => {
  let current = arr;
  const current = current.next;

  let tracker = 0;
  while (tracker <= target) {
    for (let i = 0; i < target; i++) {
      let finalValue = newArr[newArr.length - 1];
      newArr.pop();
      newArr.unshift(finalValue);
      tracker++;
    }

    return newArr;
  }
};
