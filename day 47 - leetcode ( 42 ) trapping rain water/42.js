// PLAN ( APPROACH ONE ) => brute force => not recommended , time complexity of O(n²) , correct but will lead to TLE on leetcode
// step 1: pass the height array into the function
// step 2: create a variable to keep track of the total trapped water
// step 3: create a current pointer starting at index 1
// step 4: create a variable to keep track of the tallest bar on the left
// step 5: loop through the array, stopping before the last position
// step 6: update leftTallestBar using the previous position
// step 7: check if the tallest bar on the left is greater than or equal to the current height
// step 8: create a variable to keep track of the tallest bar on the right
// step 9: loop through the remaining positions on the right to find the tallest bar
// step 10: check if the tallest bar on the right is greater than or equal to the current height
// step 11: find the shorter boundary using Math.min()
// step 12: subtract the current height from the shorter boundary to calculate trapped water
// step 13: add the trapped water to totalWater
// step 14: move current forward
// step 15: return totalWater

const trap = (height) => {
  let totalWater = 0;
  let current = 1;
  let leftTallestBar = 0;

  while (current < height.length - 1) {
    leftTallestBar = Math.max(leftTallestBar, height[current - 1]);

    if (leftTallestBar >= height[current]) {
      let rightTallestBar = 0;

      for (let i = current + 1; i < height.length; i++) {
        rightTallestBar = Math.max(rightTallestBar, height[i]);
      }

      if (rightTallestBar >= height[current]) {
        const minBar = Math.min(leftTallestBar, rightTallestBar);
        totalWater += minBar - height[current];
      }
    }

    current++;
  }

  return totalWater;
};

// PLAN ( APPROACH TWO ) => suffix maximum array ,beginner friendly, recommended ( but approach 3 is the best ) with time complexity of O(n)
// step 1: pass the height array into the function
// step 2: create a variable to keep track of the total trapped water
// step 3: create a current pointer starting at index 1
// step 4: create a variable to keep track of the tallest bar on the left
// step 5: create an empty array to store the tallest bar to the right of every position
// step 6: create a variable to keep track of the tallest bar while moving from right to left
// step 7: loop through the height array backwards
// step 8: update rightTallestBar whenever a taller bar is found
// step 9: store the current rightTallestBar at its corresponding index in rightTallestBars
// step 10: loop through the array again, stopping before the last position
// step 11: update leftTallestBar using the previous position
// step 12: get the tallest bar on the right from rightTallestBars using the current index
// step 13: check if both the left and right tallest bars are greater than or equal to the current height
// step 14: find the shorter boundary using Math.min()
// step 15: subtract the current height from the shorter boundary to calculate trapped water
// step 16: add the trapped water to totalWater
// step 17: move current forward
// step 18: return totalWater

const trap = (height) => {
  let totalWater = 0;
  let current = 1;
  let leftTallestBar = 0;

  const rightTallestBars = [];

  // calculate the tallest bar to the right of each position
  let rightTallestBar = 0;

  for (let i = height.length - 1; i >= 0; i--) {
    rightTallestBar = Math.max(rightTallestBar, height[i]);
    rightTallestBars[i] = rightTallestBar;
  }

  // calculate the trapped water
  while (current < height.length - 1) {
    leftTallestBar = Math.max(leftTallestBar, height[current - 1]);

    const rightTallestBar = rightTallestBars[current];

    if (
      leftTallestBar >= height[current] &&
      rightTallestBar >= height[current]
    ) {
      const minBar = Math.min(leftTallestBar, rightTallestBar);
      totalWater += minBar - height[current];
    }

    current++;
  }

  return totalWater;
};

// PLAN ( APPROACH THREE ) => two pointer , recommended but complex , time complexity of O(n)
// step 1: pass the height array into the function
// step 2: create a variable to keep track of the total trapped water
// step 3: create two pointers
// left starts at the beginning of the array
// right starts at the end of the array
// step 4: create two variables to track the tallest bars
// leftMax tracks the tallest bar from the left
// rightMax tracks the tallest bar from the right
// step 5: loop while left is less than right
// step 6: compare the heights at the left and right pointers
// step 7: if the left height is shorter
// check if it is greater than or equal to leftMax
// if it is, update leftMax
// otherwise, calculate the trapped water and add it to totalWater
// step 8: move the left pointer forward
// step 9: otherwise, process the right height
// check if it is greater than or equal to rightMax
// if it is, update rightMax
// otherwise, calculate the trapped water and add it to totalWater
// step 10: move the right pointer backward
// step 11: repeat until the two pointers meet
// step 12: return totalWater

const trap = (height) => {
  let totalWater = 0;

  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        totalWater += leftMax - height[left];
      }

      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        totalWater += rightMax - height[right];
      }

      right--;
    }
  }

  return totalWater;
};
