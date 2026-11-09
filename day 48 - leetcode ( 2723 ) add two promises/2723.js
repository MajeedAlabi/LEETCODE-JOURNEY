// PLAN ( APPROACH ONE )
// step 1: pass the two promises into the function
// step 2: await the first promise and store its resolved value
// step 3: await the second promise and store its resolved value
// step 4: add the two resolved values
// step 5: return the sum

const addTwoPromises = async (promise1, promise2) => {
  const firstPromise = await promise1;
  const secondPromise = await promise2;

  return firstPromise + secondPromise;
};

// PLAN ( APPROACH TWO )
// step 1: pass the two promises into the function
// step 2: pass both promises into Promise.all()
// step 3: await Promise.all() to get the resolved values of both promises
// step 4: use destructuring to store the resolved values in separate variables
// step 5: add the two resolved values
// step 6: return the sum

const addTwoPromises = async (promise1, promise2) => {
  const [firstValue, secondValue] = await Promise.all([promise1, promise2]);

  return firstValue + secondValue;
};
