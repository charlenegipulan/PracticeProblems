/*
Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.

N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/


var findRelativeRanks = function(nums) {
    let sortArray = [...nums].sort((a,b) => (b-a));
    let result = []
    for(let i = 0; i < nums.length; i++) {
        const j = sortArray.indexOf(nums[i])
        if(j === 0){
            result.push("Gold Medal")
        } else if(j === 1) {
            result.push("Silver Medal")
        } else if(j === 2) {
            result.push("Bronze Medal")
        } else {
            result.push((j + 1).toString())
        }
    }
    return result
};