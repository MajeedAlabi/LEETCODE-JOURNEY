// PLAN ( APPROACH ONE ) => ( we cant use the javascript .set() built in fucntion as said in the question )
// step 1: create a constructor function called MyHashSet
// step 2: initialize an empty array using this.set to store the keys
// step 3: create an add method on MyHashSet.prototype that accepts a key
// step 4: check if the key already exists by calling this.contains(key)
// step 5: if the key does not exist, add it to the array using push()
// step 6: create a remove method on MyHashSet.prototype that accepts a key
// step 7: find the index of the key in the array using findIndex()
// step 8: if the index is not -1, remove one element at that index using splice()
// step 9: create a contains method on MyHashSet.prototype that accepts a key
// step 10: use findIndex() to check if the key exists and return true if the index is not -1, otherwise return false

const MyHashSet = function () {
  this.set = [];
};

MyHashSet.prototype.add = function (key) {
  if (!this.contains(key)) {
    this.set.push(key);
  }
};

MyHashSet.prototype.remove = function (key) {
  const index = this.set.findIndex((item) => item === key);

  if (index !== -1) {
    this.set.splice(index, 1);
  }
};

MyHashSet.prototype.contains = function (key) {
  return this.set.findIndex((item) => item === key) !== -1;
};


// PLAN ( APPROACH TWO ) => class syntax ( we cant use the javascript .set() built in fucntion as said in the question )
// step 1: create a class called MyHashSet
// step 2: create a constructor that initializes an empty array using this.set to store the keys
// step 3: create an add method that accepts a key
// step 4: check if the key already exists by calling this.contains(key)
// step 5: if the key does not exist, add it to the array using push()
// step 6: create a remove method that accepts a key
// step 7: find the index of the key in the array using findIndex()
// step 8: if the index is not -1, remove one element at that index using splice()
// step 9: create a contains method that accepts a key
// step 10: use findIndex() to check if the key exists and return true if the index is not -1, otherwise return false

class MyHashSet {
  constructor() {
    this.set = [];
  }
  add(key) {
    if (!this.contains(key)) {
      this.set.push(key);
    }
  }
  remove(key) {
    const index = this.set.findIndex((item) => item === key);

    if (index !== -1) {
      this.set.splice(index, 1);
    }
  }
  contains(key) {
    return this.set.findIndex((item) => item === key) !== -1;
  }
}
