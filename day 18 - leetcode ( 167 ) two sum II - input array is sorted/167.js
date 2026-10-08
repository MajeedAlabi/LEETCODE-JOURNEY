// PLAN => TWO POINTER APPRAOCH
// step 1: create two pointers
// i will start from the beginning of the array while j will start from the end of the array
// step 2: loop through the array while i is less than or equal to j
// step 3: in the step 2 loop, create a sum variable to store the value of numbers[i] + numbers[j]
// step 4: if sum is greater than the target , then we reduce j 
// step 5: if sum is less than the target , then we increase i
// HINT: step 4 and 5 will make sense when you remember the array is in increasing order 
// step 6: if sum is equals to the target , note the two index that make up that target
// step 7: return the two index in an array , but add one to their index
// HINT: we are adding one because js starts counting on 0 index , but the question says assume the first value is index 1 

const twoSum = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while (i <= j) {
    const sum = numbers[i] + numbers[j];

    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};
