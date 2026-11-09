const shortestSubarray = (nums, k) => {
  let windowStart = 0;
  let shortestSubArray = Infinity;
  let currentRunningSum = 0;

  if (nums.includes(k)) return 1;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentRunningSum += nums[windowEnd];

    while (currentRunningSum >= k) {
      shortestSubArray = Math.min(
        shortestSubArray,
        windowEnd - windowStart + 1,
      );
      currentRunningSum -= nums[windowStart];
      windowStart++;
    }
  }

  return shortestSubArray === Infinity ? -1 : shortestSubArray;
};

console.log("sss", shortestSubarray([54, -5, 53, -19, 85]));
