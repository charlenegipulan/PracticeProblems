/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

var sortedSquares = function(A) {
    let ans = [];
    A.forEach(function(num) {
        let sq = num * num
        ans.push(sq);
    })
    let sorted = ans.sort((a,b) => a - b);
    return sorted;
};