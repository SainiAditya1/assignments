/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let len = numbers.length;
    let l = numbers[0];
    for(let i=1;i<len;i++)
    {
        if(numbers[i] > l)
        {
            l = numbers[i];
        }
    }
    return l;
}






module.exports = findLargestElement;