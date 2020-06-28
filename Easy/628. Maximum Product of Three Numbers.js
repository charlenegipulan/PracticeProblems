/*

Given an integer array, find three numbers whose product is maximum and output the maximum product.
Input: [1,2,3]
Output: 6

Input: [1,2,3,4]
Output: 24

The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 
*/

var maximumProduct = function(nums) {
    let sortedArr = nums.sort((a,b) => b - a);
    let noNeg = sortedArr[0] * sortedArr[1] * sortedArr[2];
    let withNeg = sortedArr[0] * sortedArr[sortedArr.length -1] * sortedArr[sortedArr.length -2];
    return noNeg > withNeg ? noNeg : withNeg;
};
