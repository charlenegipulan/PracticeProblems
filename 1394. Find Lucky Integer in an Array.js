/*

Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1.

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.


Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
*/

var findLucky = function(arr) {
    let obj = {};
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        !obj[arr[i]] ? obj[arr[i]] = 1 : obj[arr[i]]++
    }
    arr.forEach(num => {
        if (num === obj[num]) results.push(num);
    })
    return results.length === 0 ? -1 : results.sort((a,b) => b - a)[0];
};