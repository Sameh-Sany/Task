// Problem 4:
// Implement a function to find the longest common prefix among an array of strings.

// Question:
// Write a function in Node.js that takes an array of strings and returns the longest common prefix.

//solution
const longestCommonPrefix = (strings) => {
  if (strings.length === 0) return "";
  let longestPrefix = "";
  for (let i = 0; i < strings[0].length; i++) {
    let char = strings[0][i];

    if (strings.every((str) => str[i] === char)) longestPrefix += char;
  }
  return longestPrefix;
};

// Test the function
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
