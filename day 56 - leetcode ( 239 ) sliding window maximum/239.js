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

// maxSlidingWindow([1], 1);

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

// maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);

const maxSlidingWindow = (nums, k) => {
  let left = 0;
  let maxInt = -Infinity;
  let result = [];
  let reference = nums.slice(0, k);
  for (let right = k - 1; right < nums.length; right++) {
    if (right - left === k - 1) {
      if (maxInt === -Infinity) {
        maxInt = Math.max(maxInt, ...reference);
        result.push(maxInt);
      } else {
        const outgoingChar = reference.shift();
        const incomingChar = nums[right];
        reference.push(incomingChar);

        if (outgoingChar === maxInt) {
          maxInt = -Infinity;
          maxInt = Math.max(maxInt, ...reference);
          result.push(maxInt);
        } else if (outgoingChar >= incomingChar) {
          result.push(maxInt);
        } else {
          maxInt = Math.max(maxInt, incomingChar);
          result.push(maxInt);
        }
      }

      left++;
    }
  }
  console.log("first", result);
  return result;
};

maxSlidingWindow([1], 1);
// watch optimized solution 