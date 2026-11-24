// PLAN ( APPROACH ONE ) => sliding window + max tracking
// step 1: initialize left pointer to 0, maxInt to -Infinity, and an empty result array
// step 2: loop through the nums array using the right pointer
// step 3: compare the current number with maxInt and update maxInt if the current number is greater
// step 4: check if the current window size is equal to k
// step 5: push maxInt into the result array
// step 6: check if the outgoing number is equal to maxInt
// step 7: if it is, reset maxInt to -Infinity and loop through the remaining window to find a new maximum
// step 8: move the left pointer forward by one
// step 9: return the result array

const maxSlidingWindow = (nums, k) => {
  let left = 0;
  let maxInt = -Infinity;
  let result = [];

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] > maxInt) {
      maxInt = nums[right];
    }

    if (right - left + 1 === k) {
      result.push(maxInt);

      if (nums[left] === maxInt) {
        maxInt = -Infinity;

        for (let i = left + 1; i <= right; i++) {
          maxInt = Math.max(maxInt, nums[i]);
        }
      }

      left++;
    }
  }

  return result;
};

// this will give tle

// const maxSlidingWindow = (nums, k) => {
//   let left = 0;
//   let store = [];
//   let result = [];
//   let maxInt = -Infinity;
//   for (let right = 0; right < nums.length; right++) {
//     const currentChar = nums[right];
//     store.push(currentChar);
//     if(store.length > k){
//         store.shift();
//     }
//     if(store.length === k){
//         maxInt = store.reduce((a, b) => Math.max(a, b), maxInt);
//         result.push(maxInt);
//         maxInt = -Infinity;
//     }
//   }

//   console.log('first',result)
//   return result;
// };

// this will give tle
// const maxSlidingWindow = (nums, k) => {
//   let left = 0;
//   let maxInt = -Infinity;
//   let result = [];
//   for (let right = 0; right < nums.length; right++) {
//     if (right - left === k - 1) {
//       const reference = nums.slice(left, right + 1);
//       console.log('hmm',reference)
//       maxInt = Math.max(maxInt, ...reference);
//       result.push(maxInt);
//       maxInt = -Infinity
//       left++;
//     }
//   }

//   return result;
// };

// this will give tle
// const maxSlidingWindow = (nums, k) => {
//   let left = 0;
//   let maxInt = -Infinity;
//   let result = [];
//   let reference = nums.slice(0, k);
//   for (let right = k - 1; right < nums.length; right++) {
//     if (right - left === k - 1) {
//       if (maxInt === -Infinity) {
//         maxInt = Math.max(maxInt, ...reference);
//         result.push(maxInt);
//       } else {
//         const outgoingChar = reference.shift();
//         const incomingChar = nums[right];
//         reference.push(incomingChar);

//         if (outgoingChar === maxInt) {
//           maxInt = -Infinity;
//           maxInt = Math.max(maxInt, ...reference);
//           result.push(maxInt);
//         } else if (outgoingChar >= incomingChar) {
//           result.push(maxInt);
//         } else {
//           maxInt = Math.max(maxInt, incomingChar);
//           result.push(maxInt);
//         }
//       }

//       left++;
//     }
//   }
//   return result;
// };
