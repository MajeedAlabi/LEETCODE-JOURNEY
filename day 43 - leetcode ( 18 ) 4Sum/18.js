const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  const result = [];

  const totalNumbers = nums.length;

  // The first pointer needs 3 more numbers after it
  const lastStartIndex = totalNumbers - 4;

  // The second pointer needs 2 more numbers after it
  const lastSecondIndex = totalNumbers - 3;

  let start = 0;

  while (start <= lastStartIndex) {
    if (start > 0 && nums[start] === nums[start - 1]) {
      start++;
      continue;
    }

    let second = start + 1;

    while (second <= lastSecondIndex) {
      if (second > start + 1 && nums[second] === nums[second - 1]) {
        second++;
        continue;
      }

      let left = second + 1;
      let right = totalNumbers - 1;

      while (left < right) {
        const sum = nums[start] + nums[second] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[start], nums[second], nums[left], nums[right]]);

          left++;
          right--;

          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }

      second++;
    }

    start++;
  }

  return result;
};
