/*

1491. Average Salary Excluding the Minimum and Maximum Salary

Given an array of unique integers salary where salary[i] is the salary of the employee i.

Return the average salary of employees excluding the minimum and maximum salary

Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500


Example 2:
Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000)/1= 2000


*/

var average = function (salary) {
    let sortedArr = salary.sort((a, b) => a - b).slice(1, salary.length - 1);
    return sortedArr.reduce((a, b) => a + b, 0) / sortedArr.length;
};