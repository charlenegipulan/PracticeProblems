/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
*/

var singleNumber = function(nums) {
    let map = {};   
    for (let num of nums) {
        map[num] ? delete map[num] : map[num] = 1;
    }
    return Object.keys(map)[0];
};