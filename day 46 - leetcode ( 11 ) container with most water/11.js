// PLAN ( APPROACH ONE ) => two pointer , time complexity of O(n)
// step 1: pass the height array into the function
// step 2: create two pointers
// left starts at the beginning of the array
// right starts at the end of the array
// step 3: create a variable to keep track of the maximum water
// step 4: loop while left is less than right
// step 5: find the shorter height between the two pointers
// step 6: calculate the width using right - left
// step 7: calculate the current area by multiplying the width by the shorter height
// step 8: update maxWater if the current area is greater
// step 9: move the pointer pointing to the shorter height inward
// if both heights are equal, move either pointer
// step 10: repeat until the pointers meet
// step 11: return maxWater

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const shorterHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const currentArea = width * shorterHeight;

    maxWater = Math.max(maxWater, currentArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
};

// PLAN ( APPROACH TWO ) => beginner friendly , correct but wont submit on leetcode because of TLE, brute force nested loops , time complexity of O(n²) , appraoch 1 will be preferred in interviews
// Step 1: Pass the height array into the function.
// Step 2: Create a variable to keep track of the maximum water.
// Step 3: Create a left pointer starting at index 0.
// Step 4: Loop through the array using the left pointer.
// Step 5: Create a right pointer starting immediately after left.
// Step 6: Loop through the remaining positions using right.
// Step 7: Find the shorter height between the two selected positions.
// Step 8: Calculate the width using right - left.
// Step 9: Multiply the width by the shorter height to get the current area.
// Step 10: Compare the current area with the maximum water found so far.
// Update maxWater if the current area is larger.
// Step 11: Move right forward until the inner loop finishes.
// Step 12: Move left forward and repeat.
// Step 13: Return the maximum water.

const maxArea = (height) => {
  let left = 0;
  let maxWater = 0;

  while (left < height.length) {
    for (let right = left + 1; right < height.length; right++) {
      const shorterHeight = Math.min(height[left], height[right]);
      const width = right - left;
      const currentArea = width * shorterHeight;

      maxWater = Math.max(maxWater, currentArea);
    }

    left++;
  }

  return maxWater;
};
