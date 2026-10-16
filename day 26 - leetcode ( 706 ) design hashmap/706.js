// PLAN
// step 1: create a class called MyHashMap
// step 2: initialize an empty array to store key-value pairs
// step 3: create a contain method that returns the index of a key or -1 if it doesn't exist
// step 4: create a put method that accepts a key and a value
// step 5: call contain to check if the key already exists
// step 6: if the key exists, update its value at index 1
// step 7: if the key doesn't exist, add the key-value pair to the array
// step 8: create a get method that accepts a key
// step 9: call contain to find the key's index
// step 10: if the key exists, return its value at index 1, otherwise return -1
// step 11: create a remove method that accepts a key
// step 12: call contain to find the key's index
// step 13: if the key exists, remove the key-value pair using splice

class MyHashMap {
  constructor() {
    this.map = [];
  }

  contain(key) {
    return this.map.findIndex((item) => item[0] === key);
  }

  put(key, value) {
    const result = this.contain(key);
    if (result !== -1) {
      this.map[result][1] = value;
    } else {
      this.map.push([key, value]);
    }
  }

  get(key) {
    const result = this.contain(key);
    if (result !== -1) {
      return this.map[result][1];
    } else {
      return -1;
    }
  }

  remove(key) {
    const result = this.contain(key);
    if (result !== -1) {
      this.map.splice(result, 1);
    }
  }
}
