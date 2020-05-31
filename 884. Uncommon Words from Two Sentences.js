/*We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
*/

var uncommonFromSentences = function(A, B) {
    const obj = {}
    const a = A.split(' ');
    const b = B.split(' ');
    let arr = a.concat(b).sort();
    arr.forEach(function(word) {
        if(!obj[word]) {
            obj[word] = 1;
        } else {
            obj[word]++
        }
    })
    return(Object.keys(obj).filter(num => obj[num] === 1));
};