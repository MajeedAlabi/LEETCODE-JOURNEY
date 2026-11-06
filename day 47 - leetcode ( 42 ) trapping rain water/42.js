const trap = (height) => {
  let totalWater = 0;
  let left = 0;
  let current = 1;
  let right = 2;

  while (right < height.length) {
    if (height[current] <= height[left]) {
      if (height[left] < height[right]) {
        totalWater += 1;
        right++;
      } else {
        left = right - 1;
        current = right;
        right++;
      }
    } else {
      left++;
      current++;
      right++;
    }
  }

  return totalWater;

  //   let leftTallestBar = 0;
  //   let rightTallestBar
  //   let totalWater = 0;
  //   let current = 1;
  //   while(current < height.length){
  //     leftTallestBar = Math.max()
  //   }
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
