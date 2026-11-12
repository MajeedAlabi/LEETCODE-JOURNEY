const checkPossibility = (nums) => {
  let modified = 0;
  if (nums.length <= 2) return true;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1] || Infinity) {
      //   const modifiedValue = Math.max(nums[i - 1], nums[i + 1]);
      nums[i] = nums[i - 1] || -Infinity;
      modified++;
      console.log("hmm", `modified: ${modified} i: ${i} nums[i]: ${nums[i]}`);
    }
    let lastAccurateValue = nums[i + 1];
    if (modified > 1) {
      return false;
    }
  }
  return true;
};

// checkPossibility([4, 2, 3]);
// checkPossibility([5,7,1,8]);
// checkPossibility([5,3, 4, 2, 3]);
console.log("first", checkPossibility([3, 4, 2, 3]));

// const checkPossibility = (nums) => {
//   let modified = 0;
//   if (nums.length <= 2) return true;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] > (nums[i + 1] || Infinity) || nums[i] < nums[i - 1]) {
//       //   const modifiedValue = Math.max(nums[i - 1], nums[i + 1]);
//       let lastAccurateValue =
//       nums[i] = nums[i - 1] || -Infinity;
//       modified++;
//       console.log('hmm', `modified: ${modified} i: ${i} nums[i]: ${nums[i]}`)
//     }
//     if (modified > 1) {
//       return false;
//     }
//   }
//   return true;
// };

// // checkPossibility([4, 2, 3]);
// // checkPossibility([5,7,1,8]);
// // checkPossibility([5,3, 4, 2, 3]);
// console.log("first", checkPossibility([3, 4, 2, 3]));
