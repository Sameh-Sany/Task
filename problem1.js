// Problem 1:
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if the brackets are closed in the correct order.

// Question:
// Write a function in Node.js that takes a string containing brackets and returns true if the brackets are closed in the correct order, and false otherwise.

// solution
const isValidBrackets = (str) => {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const matchingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      const poppedBracket = stack.pop();
      if (poppedBracket !== matchingBrackets[str[i]]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

// Test the function
const str = "{[()]}";
console.log(isValidBrackets(str)); // Output: true
