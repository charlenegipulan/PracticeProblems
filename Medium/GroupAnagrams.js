//Given an array of strings, group anagrams together.
 /*
Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

var groupAnagrams = function(strs) {
    let cache = {};
    for(let str of strs) {
        let key = str.split('').sort().join(''); //aet
        (!cache[key]) ? cache[key] = [str] : cache[key].push(str);
    }
    return Object.values(cache);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);