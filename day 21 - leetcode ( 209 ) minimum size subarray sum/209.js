const minSubArrayLen = (nums, target) => {
  let counterLength = 0;
  let resultHolder = {};
  for (let i = 0; i < nums.length; i++) {
    let firstValue = nums[i];
    counterLength = 1;
    let newArray = [...nums];
    newArray.splice(i, 1);

    counterLength = 2;
    for (let i = 0; i < newArray.length; i++) {
      if (firstValue + newArray[i] >= target) {
        resultHolder[(firstValue, newArray[i])] = counterLength;
      }

      firstValue += newArray[i];
      counterLength++;
    }
  }
};

minSubArrayLen([2, 3, 1, 2, 4, 3]);
