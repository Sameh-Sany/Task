// Problem 2:
// Given a sorted array of integers, write a function to remove duplicate elements in-place (modify the original array) and return the modified array.

// Question:
// Write a function in Node.js that takes a sorted array of integers and modifies it in-place to remove duplicates, returning the modified array.

// solution 1:
const removeDuplicates = (arr) => {
  let counter = 0;

  while (counter < arr.length) {
    if (arr[counter] === arr[counter + 1]) {
      arr.splice(counter + 1, 1);
    } else {
      counter++;
    }
  }

  return arr;
};

// Test the function
const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]
