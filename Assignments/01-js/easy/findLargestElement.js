/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Math.max() does not take an array directly — it takes individual numbers as arguments.
    if(numbers.length < 1){
        return undefined
    }
    let maxElement = Math.max(... numbers)
    return maxElement
}

module.exports = findLargestElement;