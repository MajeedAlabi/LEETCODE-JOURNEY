const find132pattern = (nums) => {
  const templateFunction = (x, y, z) => {
    console.log("new val", `${x} , ${y}, ${z}`);
    if (x < z && z < y) {
      return true;
    }
  };

  let left = 0;
  let right = left + 1;

  while (right + 1 < nums.length) {
    console.log("values", `${nums[left]} , ${nums[right]}`);
    const result = templateFunction(nums[left], nums[right], nums[right + 1]);
    console.log("result", result);
    if (result === true) {
      console.log("didi i ever get here");
      return result;
    } else {
      left++;
      right++;
    }
  }

  return false;
};

console.log("first", find132pattern([3,5,0,3,4]));
