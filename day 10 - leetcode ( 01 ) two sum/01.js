// PLAN
// step 1: pass in your nums array and your target interger into the function
// step 2: loop over the nums array while keeping each i as a point of reference ( .ie. first digit in your sum equation )
// step 3: initialize an empty array called newArr at the beginning of every loop
// step 4: in the step 2 loop, let reference = nums[i]
// step 5: now we have the current value of our index stored in reference , then we do target - reference = secondValue ( it is a new variable )
// step 6: we use forEach to get the values of the remaining elements ( while excluding i ) in the array and push it to newArr
// HINT: we dont use .splice() in step 6 because splice alters the nums parent array ( which will affect our reference in step 5 on subsequent loops )
// HINT: We don't use indexOf(value) to identify the index we want to exclude because indexOf() always returns the first occurrence of a value. This causes a problem with duplicate values.
// example: [3, 3] -> nums.indexOf(3) always returns 0, even when we are dealing with the 3 at index 1.
// HINT: we cant repeat an index but a value can be repeated ( .ie. if the integer 3 is on both index 0 and 1 , then you can use it once on 0 ,  and again on 1 )
// step 7: then we do newArr.find(secondValue) and store in newArr2 , remember newArr wont have the current i in it because of step 6
// step 8: if step 7 doesn't return undefined , then we have our two values to make up target are [reference and secondValue]
// HINT: you might be thinking in step 8 , why cant we just say if newArr2 is truthy , but remeber 0 is not a truthy value, hence why we initiate against undefined , because .find() returns undefined if it doesn't find the value
// step 9: we get the index of both reference ( which is i ) and secondValue , then return it in an array

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    const newArr = [];
    let reference = nums[i];
    const secondValue = target - reference;
    nums.forEach((value, index) => {
      if (index !== i) {
        newArr.push(value);
      }
    });
    const newArr2 = newArr.find((value) => value === secondValue);
    if (newArr2 !== undefined) {
      const secondValueIndex = nums.findIndex(
        (value, index) => index !== i && value === secondValue,
      );
      const result = [i, secondValueIndex];
      return result;
    }
  }
};
