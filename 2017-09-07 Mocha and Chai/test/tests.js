const expect = require('chai').expect;
const fs = require('fs');

const {
  lastThreeChars,
  writeToFileXTimes
} = require('../functions');

describe("lastThreeChars", () => {
  it("returns the last three characters given a string > 3 characters", () => {
    expect(lastThreeChars("abcdefg")).to.equal("efg")
  })

  it("returns an empty string given an empty string", () => {
    expect(lastThreeChars("")).to.equal("")
  })
})


const OUTPUT_FILE = process.env.OUTPUT_FILE || "test_output.txt"

describe("writeToFileXTimes()", () => {
  beforeEach(() => {
    try {
      fs.unlinkSync(OUTPUT_FILE);
    } catch(err) {
      console.error(err)
    }
  })

  it("concatenate the given strings n times and writes to a file", () => {
    writeToFileXTimes("abc", 3)
    const fileContents = fs.readFileSync(OUTPUT_FILE, 'utf8')
    expect(fileContents).to.equal("abcabcabc")
  })

})
