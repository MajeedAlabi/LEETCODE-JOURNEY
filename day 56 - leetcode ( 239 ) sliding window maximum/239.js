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

const maxSlidingWindow = (nums, k) => {
  let left = 0;
  let maxInt = -Infinity;
  let result = [];
  for (let right = 0; right < nums.length; right++) {
    if (right - left === k - 1) {
      const reference = nums.slice(left, right + 1);
      console.log('hmm',reference)
      maxInt = Math.max(maxInt, ...reference);
      result.push(maxInt);
      maxInt = -Infinity
      left++;
    }
  }

  return result;
};

maxSlidingWindow([1, -1], 1);
