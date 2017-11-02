// From: https://www.hackerrank.com/challenges/repeated-string/problem

// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.
//
// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.
//
// Input Format
//
// The first line contains a single string, .
// The second line contains an integer, .
//
// Constraints
//
// For  of the test cases, .
// Output Format
//
// Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.
//
// Sample Input 0
//
// aba
// 10
// Sample Output 0
//
// 7
// Explanation 0
// The first  letters of the infinite string are abaabaabaa. Because there are  a's, we print  on a new line.
//
// Sample Input 1
//
// a
// 1000000000000
// Sample Output 1
//
// 1000000000000
// Explanation 1
// Because all of the first  letters of the infinite string are a, we print  on a new line.

process.stdin.resume()
process.stdin.setEncoding('ascii')

let input_stdin = ''
let input_stdin_array = ''
let input_currentline = 0

process.stdin.on('data', (data) => {
  input_stdin += data
})

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n')
  main()
})

function readLine() {
  return input_stdin_array[input_currentline++]
}

// ///////////// ignore above this line ////////////////////

// Time Complexity: O(n) where n is s.length
// Space Complexity: O(n) where n is s.length
function main() {
  const s = readLine() // O(s.length)
  const n = parseInt(readLine()) // O(n.toString().length)
  let result = 0

  const countA = countInString(s, 'a') // O(s.length)

  const fullRepititions = Math.floor(n / s.length) // O(1)
  const remainder = (n % s.length) // O(1)

  result += fullRepititions * countA // O(1)

  const remainderStr = s.slice(0, remainder) // O(s.length)

  // NOTE: could potentially optimize by using a hash table to get the
  // number of 'a's at every location in s on the first pass.
  result += countInString(remainderStr, 'a') // O(s.length)

  console.log(result)
}

function countInString(str, char) {
  return str.split("").reduce((acc, value) => {
    if (value === char) {
      return acc + 1
    }
    return acc
  }, 0)
}










function main() {
  const a = new Array(10000)
  secondFunction(a)

}

function secondFunction(a) {
  // do something
  //
  return 5
}
