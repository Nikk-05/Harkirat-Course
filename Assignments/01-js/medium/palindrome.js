/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isPalindrome(str) {
  let start = 0, end = str.length - 1
  while (start < end){
      while(start<end && !isAlphabet(str.charAt(start))){
          start++;
      }

      while(start<end && !isAlphabet(str.charAt(end))){
          end--;
      }
      
      if (str.charAt(start).toLowerCase() !== str.charAt(end).toLowerCase()) {
          return false;
      }
      start++
      end--
  }
  return true;
}

module.exports = isPalindrome;
