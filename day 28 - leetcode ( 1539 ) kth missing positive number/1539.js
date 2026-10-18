// PLAN ( APPROACH ONE ) => using sets
// step 1: create a number that represents the upper limit we need to check
// step 2: create an array containing all positive numbers from 1 to the upper limit
// step 3: create a set from the arr array for quick lookups
// step 4: filter the positive numbers to keep only the ones that are missing from arr
// step 5: return the kth missing number using k - 1 as the index

const findKthPositive = (arr, k) => {
  let finalNum = arr[arr.length - 1] + k;
  let store = [];
  for (let i = 0; i < finalNum; i++) {
    store.push(i + 1);
  }

  let store2 = new Set(arr);

  const missingValues = store.filter((items) => !store2.has(items));

  return missingValues[k - 1];
};

// PLAN ( APPROACH TWO )
// step 1: create a number that represents the upper limit we need to check
// step 2: create an array containing all positive numbers from 1 to the upper limit
// step 3: filter the array to keep only numbers that do not exist in arr using includes()
// step 4: return the kth missing number using k - 1 as the index

const findKthPositive = (arr, k) => {
  let finalNum = arr[arr.length - 1] + k;
  let store = [];
  for (let i = 0; i < finalNum; i++) {
    store.push(i + 1);
  }
  const missingValues = store.filter((items) => !arr.includes(items));

  return missingValues[k - 1];
};

// PLAN ( APPROACH THREE ) => more complex but interviewers would be impressed
// step 1: pass the arr array and k into the function
// step 2: loop through the arr array
// step 3: check if the current number is less than or equal to k
// step 4: if it is, increase k by 1 because that number is not missing
// step 5: if the current number is greater than k, stop the loop because k is the kth missing positive number
// step 6: return k

const findKthPositive = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      k++;
    } else {
      break;
    }
  }

  return k;
};
