// PLAN  ( APPRAOCH ONE ) => not recommended ,it is correct but leetcode wants the solution to be in time complexity O(1) for all three functions , but this solution is O(1) for insert and remove function , but O(n) for getRandom function
// step 1: create a Set to store unique values
// step 2: for insert, check if the value already exists in the Set
// if it exists, return false
// otherwise, add it and return true
// step 3: for remove, check if the value exists in the Set
// if it exists, delete it and return true
// otherwise, return false
// step 4: for getRandom, generate a random index based on the Set size
// step 5: convert the Set into an array and use the random index to retrieve a value
// step 6: return the randomly selected value

class RandomizedSet {
  constructor() {
    this.result = new Set();
  }

  insert(val) {
    if (this.result.has(val)) {
      return false;
    } else {
      this.result.add(val);
      return true;
    }
  }

  remove(val) {
    if (this.result.has(val)) {
      this.result.delete(val);
      return true;
    } else {
      return false;
    }
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.result.size);
    return [...this.result][randomIndex];
  }
}

// PLAN ( APPROACH TWO ) => recommended appraoch , O(1) time complexity in all three functions
// step 1: create an array to store the values and a Map to track each value's index
// step 2: for insert, check if the value already exists in the Map
// if it exists, return false
// otherwise, add the value to the end of the array
// store its index in the Map
// return true
// step 3: for remove, check if the value exists in the Map
// if it doesn't exist, return false
// step 4: get the index of the value to remove from the Map
// get the last value in the array
// step 5: move the last value into the position of the value being removed
// update the last value's index in the Map
// step 6: remove the last element from the array
// delete the removed value from the Map
// return true
// step 7: for getRandom, generate a random index based on the array length
// step 8: return the value at that random index

class RandomizedSet {
  constructor() {
    this.store = [];
    this.result = new Map();
  }

  insert(val) {
    if (this.result.has(val)) {
      return false;
    }

    this.result.set(val, this.store.length);
    this.store.push(val);

    return true;
  }

  remove(val) {
    if (!this.result.has(val)) {
      return false;
    }

    const index = this.result.get(val);
    const lastValue = this.store[this.store.length - 1];

    this.store[index] = lastValue;
    this.result.set(lastValue, index);

    this.store.pop();
    this.result.delete(val);

    return true;
  }

  getRandom() {
    const randomIndex = Math.floor(Math.random() * this.store.length);

    return this.store[randomIndex];
  }
}
