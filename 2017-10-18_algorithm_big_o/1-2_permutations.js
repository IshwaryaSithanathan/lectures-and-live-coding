// 2017-10-18

// Check Permutation:
//
// Given two strings, write a method to decide if one is a permutation of the other.

// abcabc => {a: 2, b: 2, c: 2}
// aabcbc
//
// Check out: http://bigocheatsheet.com/
//

// Time complexity: O (n log n)
function checkPermutation(word1, word2) {
  if(word1.length !== word2.length)  // O(1) O(1)
    return false

  let sortedWord1 = word1.split('').sort().join('')  // O(n)  O(n log n)  O(n)
  let sortedWord2 = word2.split('').sort().join('')  // O(n)  O(n log n)  O(n)
  return sortedWord1 === sortedWord2
}

let output = checkPermutation('abc', 'cab')
console.log(output)
