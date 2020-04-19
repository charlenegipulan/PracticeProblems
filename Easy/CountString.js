//Create a function that takes two strings as arguments and returns 
//the number of times the first string (the single character) is found in the second string.

/*
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
*/

function charCount(myChar, str) {
	var num = 0;
	var newNum = str.split("").forEach(function(n) {
		if (n == myChar) {
			num++
		}
	})
	return num;
}