// PLAN ( APPROACH 1 ) => always use this approach , approach 2 and 3 will always say time limit exceeded when you submit even though they are correct
// step 1: pass in nums1 and nums2 arrays into the function
// step 2: loop over the nums1 array
// step 3: inside the nums1 loop, create another loop over the nums2 array
// step 4: for each iteration of the nums2 loop, compare nums1[i] with nums2[j]
// step 5: if nums1[i] === nums2[j], then we have found a common value, so return nums1[i]
// HINT: we can immediately return the value because both arrays are sorted in ascending order ( according to the question ), so the first common value we encounter will be the smallest common value
// step 6: if nums2[j] > nums1[i], break out of the nums2 loop
// HINT: both arrays are already sorted in ascending order, If nums2[j] is greater than nums1[i], all the values after nums2[j] will also be greater than nums1[i], so nums1[i] cannot exist later in nums2
// step 7: if the inner loop finishes without finding a common value, the outer loop moves to the next value in nums1
// step 8: repeat steps 3–7 until all values in nums1 have been checked
// step 9: if the outer loop finishes without finding a common value,
// return -1

const getCommon = (nums1, nums2) => {
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        return nums1[i];
      }

      if (nums2[j] > nums1[i]) {
        break;
      }
    }
  }

  return -1;
};

// PLAN ( APPROACH 2 )
// step 1: pass in nums1 and nums2 array into the function
// step 2: declare a variable called 'result' and default it to an empty array
// step 3: loop over the nums1 array
// step 4: for each iteration in the step 3 loop , check if that value of i exists in nums2 , you can use .find() to achieve this, or several other methods
// step 5: if step 4 exist , push the value of i into the result array
// step 6: once the loop is completed , check the length of result
// step 7: if the length of result is greater than one, use .reduce() on the result array and get the lowest value
// step 8: store the lowest value in a variable called finalResult
// step 8: return final result
// step 9: if step 4 % 5 don't exist and the loop ends,  then result is an empty array .ie. length is less than one , return -1

const getCommon = (nums1, nums2) => {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    const commonValue = nums2.find((item) => {
      return nums1[i] === item;
    });
    if (commonValue !== undefined) {
      result.push(commonValue);
    }
  }

  if (result.length > 0) {
    const finalResult = result.reduce((acc, min) => (min < acc ? min : acc));
    return finalResult;
  } else {
    return -1;
  }
};

// PLAN ( APPROACH 3 )
// step 1: pass in nums1 and nums2 array into the function
// step 2: use .sort() on the nums 1 and nums 2 array and arrange them in ascending order ( from lowest to highest )
// step 3: loop over the nums1 array
// step 4: for each iteration in the step 3 loop , check if that value of i exists in nums2 , you can use .find() to achieve this, or several other methods
// step 5: if step 4 exist , return the value of i
// HINT: no need to sort beacuse the question says it is already in ascending order
// HINT: we return the first value of i since that will be the smallest value , so our loop doesnt need to continue once we have the smallest value
// step 6: once the loop finishes and step 4 doesn't exist , we return -1

const getCommon = (nums1, nums2) => {
  for (let i = 0; i < nums1.length; i++) {
    const commonValue = nums2.find((item) => {
      return nums1[i] === item;
    });
    if (commonValue !== undefined) {
      return commonValue;
    }
  }

  return -1;
};
