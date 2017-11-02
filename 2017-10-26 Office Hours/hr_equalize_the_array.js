// Equalize the Array
// Karl has an array of integers defined as . In one operation, he can delete any
// element from the array.
// Karl wants all the elements of the array to be equal to one another. To do this, he must delete zero or more
// elements from the array. Find and print the minimum number of deletion operations Karl must perform so
// that all the array's elements are equal.
// Input Format
// The first line contains an integer, , denoting the number of elements in array .
// The next line contains space-separated integers where element corresponds to array element (
// .
// Constraints
// Output Format
// Print a single integer denoting the minimum number of elements Karl must delete for all elements in the
// array to be equal.
// Sample Input
// 5
// 3 3 2 1 3
// Sample Output
// 2
// Explanation
// Array . If we delete and , all of the elements in the resulting array,
// , will be equal. Deleting these elements is minimal because our only other options would be
// to delete elements to get an array of either or . Thus, we print on a new line, as that is the
// minimum number of deletions resulting in an array where all elements are equal.
//
//

// My solution:
// Use a hash table to count the number of each element.
// Iterate through the hash table's keys and find the maximum (or keep track of the key for it as you go)
// Return n minus the number (count) of the most common element.


function processData(input) {
    //Enter your code here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
