// PLAN ( APPROACH ONE ) => correct but it is too DRY , and also high time complexity , it can be improved, check approach two below
// step 1: pass list1 and list2 into the function
// step 2: create a Map to store each common restaurant and the sum of its indices
// step 3: loop through list1 using i as the current index
// step 4: check if the current restaurant exists in list2
// step 5: if it exists, find its index in list2
// step 6: add the indices from both lists and store the restaurant and its index sum in the Map
// step 7: create a variable called minimumIndex and initialize it to Infinity
// step 8: loop through the Map and update minimumIndex whenever a smaller index sum is found
// step 9: create an empty array to store the restaurants with the minimum index sum
// step 10: loop through the Map again
// step 11: if a restaurant's index sum equals minimumIndex, add the restaurant to the result array
// step 12: return the result array

const findRestaurant = (list1, list2) => {
  const store = new Map();

  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      const index = list2.findIndex((item, index) => item === list1[i]);
      store.set(list1[i], i + index);
    }
  }

  let minimumIndex = Infinity;
  for (const [items, values] of store) {
    minimumIndex = Math.min(minimumIndex, values);
  }

  let final = [];
  for (const [items, values] of store) {
    if (values === minimumIndex) {
      final.push(items);
    }
  }

  return final;
};

// PLAN ( APPROACH TWO ) => recommended and also beginner friendly
// step 1: pass list1 and list2 into the function
// step 2: create a Map to store each restaurant in list1 and its index
// step 3: loop through list1 and store each restaurant with its index in the Map
// step 4: create a variable called minimumIndex and initialize it to Infinity
// step 5: create an empty array to store restaurants with the minimum index sum
// step 6: loop through list2 using j as the current index
// step 7: check if the current restaurant exists in the Map
// step 8: if it exists, calculate the index sum by adding its stored index to j
// step 9: if the index sum is smaller than minimumIndex, update minimumIndex, clear the result array, and add the current restaurant
// step 10: if the index sum equals minimumIndex, add the current restaurant to the result array
// step 11: continue checking the remaining restaurants in list2
// step 12: return the result array

const findRestaurant = (list1, list2) => {
  const store = new Map();

  for (let i = 0; i < list1.length; i++) {
    store.set(list1[i], i);
  }

  let minimumIndex = Infinity;
  const result = [];

  for (let j = 0; j < list2.length; j++) {
    const restaurant = list2[j];

    if (store.has(restaurant)) {
      const indexSum = store.get(restaurant) + j;

      if (indexSum < minimumIndex) {
        minimumIndex = indexSum;
        result.length = 0;
        result.push(restaurant);
      } else if (indexSum === minimumIndex) {
        result.push(restaurant);
      }
    }
  }

  return result;
};
