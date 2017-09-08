const fs = require('fs')

const outputFile = process.env.OUTPUT_FILE || "output.txt";

const lastThreeChars = (str) => {
  let newStr = str.toString()
  return str.slice(-3);
}

const writeToFileXTimes = (str, n) => {
  var result = ""
  for (let i = 1; i <= n; i++) {
    result += str
  }
  fs.appendFileSync(outputFile, result);
}

// writeToFileXTimes("abc", 3)


//
// console.log("abcdefg yields... ", lastThreeChars("abcdefg"))
//
// console.log("empty string yields... ", lastThreeChars(""))

module.exports = {
  lastThreeChars,
  writeToFileXTimes
}
