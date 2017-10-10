const fs = require('fs')

const OUTPUT_FILE = process.env.OUTPUT_FILE || 'output.txt';

const lastThreeChars = (str) => {
  const newStr = str.toString()
  return newStr.slice(-3);
}

const writeToFileXTimes = (str, n) => {
  let result = ''
  for (let i = 1; i <= n; i++) {
    result += str
  }
  fs.appendFileSync(OUTPUT_FILE, result);
}


module.exports = {
  lastThreeChars,
  writeToFileXTimes,
}
