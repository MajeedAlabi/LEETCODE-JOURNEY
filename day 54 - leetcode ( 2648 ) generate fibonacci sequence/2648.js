// PLAN ( APPROACH ONE ) => generator function + array storage
// time complexity: O(1) per next() call
// space complexity: O(n)
// step 1: create an array to store the fibonacci numbers
// initialise it with [0, 1]
// step 2: yield the first fibonacci number
// step 3: yield the second fibonacci number
// step 4: create an infinite while loop to generate the remaining numbers
// step 5: get the previous number and the number before it
// step 6: add both numbers together to get the next fibonacci number
// step 7: push the sum into the array
// step 8: yield the sum
// step 9: repeat whenever next() is called

const fibGenerator = function* () {
  let store = [0, 1];

  yield store[0];
  yield store[1];

  while (true) {
    const previousNumber = store[store.length - 1];
    const numberBeforePrevious = store[store.length - 2];

    const sum = previousNumber + numberBeforePrevious;

    store.push(sum);
    yield sum;
  }
};
