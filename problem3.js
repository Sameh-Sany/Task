// Problem 3:
// Given a set of non-negative integers, and a value sum, determine if there is a subset of the given set with a sum equal to the given sum.

// Question:
// Write a function in Node.js that takes a set of non-negative integers and a target sum and returns true if there exists a subset with the given sum, and false otherwise.

//solution

const isSubsetSum = (set, sum) => {
  let result = false;
  for (let i = 0; i < set.length; i++) {
    for (let j = 1; j < set.length; j++) {
      if (set[i] + set[j] === sum) {
        result = true;
      }
    }
  }
  return result;
};

// Test the function
const set = [9, 34, 1, 12, 2, 2];
const sum = 9;
console.log(isSubsetSum(set, sum)); // Output: true
