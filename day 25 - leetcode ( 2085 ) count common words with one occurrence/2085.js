// PLAN
// step 1: pass the words1 and words2 arrays into the function
// step 2: create a variable to store the total number of common words that appear exactly once in both arrays
// step 3: loop through each word in words1
// step 4: create a counter to track how many times the current word appears in words1
// step 5: create another counter to track how many times the current word appears in words2
// step 6: loop through words1 and count how many times the current word appears in it
// step 7: loop through words2 and count how many times the current word appears in it
// step 8: check if the current word appears exactly once in words1 and exactly once in words2
// step 9: if both conditions are true, increase the total counter by 1
// step 10: return the total counter after checking all the words

const countWords = (words1, words2) => {
  let store = {};
  let count = 0;
  let total = 0;

  for (let i = 0; i < words1.length; i++) {
    for (let j = 0; j < words2.length; j++) {
      if (words1[i] === words2[j]) {
        if (store[words1[i]] === undefined) {
          store[words1[i]] = 1;
        } else {
          store[words1[i]] += 1;
        }
      }
    }

    count = 0;
  }

  for (let value in store) {
    if (store[value] === 1) {
      total++;
    }
  }

  return total;
};
