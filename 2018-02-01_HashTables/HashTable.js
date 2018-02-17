/* eslint-disable */

class HashTable {
  constructor() {
    this.data = Array(16)
  }

  insert(key, val) {
    const i = HashTable.hash(key, this.data.length)
    if (!this.data[i]) {
      this.data[i] = [[key, val]]
      return
    } else {
      // loop through this.data[i] and check if key already present.
      // if so, overwrite
      // if not, push to this.data[i]
      let inserted = false

      // note that there's a bug below. if we find the element we will keep looping through the rest of the array anyway
      // use a standard for loop instead `for (let i = 0; ...)`
      this.data[i].forEach((element) => {
        if (element[0] === key) {
          element[1] = val
          inserted = true
          return
        }
      })
      if (!inserted) {
        this.data[i].push([key, val])
      }
    }


    // what if there's something already there?
    // what if the key already exists?
  }
}

HashTable.hash = (key, maxSize) => {
  // assume key is a string
  // loop through each character in the string and get the character code for that character and add it to a total.
  // total % maxSize
  // "bat"
  // "tab"

  let total = 0

  key.split('').forEach((char, i) => {
    total += char.charCodeAt() * (i + 1)
  })

  return total % maxSize
}
