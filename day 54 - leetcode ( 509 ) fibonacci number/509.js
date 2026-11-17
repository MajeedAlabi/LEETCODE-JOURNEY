// PLAN => iterative dynamic programming + array storage
// time complexity: O(n)
// space complexity: O(n)
// step 1: check if n is 0 or 1
// return the corresponding fibonacci number
// step 2: create an array to store the fibonacci numbers
// initialise it with [0, 1]
// step 3: create an iteration counter starting at 2
// step 4: loop while iteration is less than or equal to n
// step 5: get the previous number and the number before it
// step 6: add both numbers together to get the next fibonacci number
// step 7: push the sum into the array
// step 8: increase the iteration counter by 1
// step 9: return the fibonacci number at index n

const fib = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let store = [0, 1];
  let iteration = 2;

  while (iteration <= n) {
    const previousNumber = store[iteration - 1];
    const numberBeforePrevious = store[iteration - 2];

    const sum = previousNumber + numberBeforePrevious;

    store.push(sum);
    iteration++;
  }

  return store[n];
};
