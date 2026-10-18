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
const findKthPositive = (arr, k) => {
  let finalNum = arr[arr.length - 1] + k;
  let store = [];
  for (let i = 0; i < finalNum; i++) {
    store.push(i + 1);
  }
  const missingValues = store.filter((items) => !arr.includes(items));

  return missingValues[k - 1];
};

findKthPositive([2, 3, 4, 7, 11], 5);
