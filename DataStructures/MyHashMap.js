// *** Hashmap ***
//
// Like a javascript object
// Key value pairs.
// aka: Map, Dictionary, Hash Table
// No guaranteed order
//
// Operations:
// add
// remove
// search
// empty
// length
// getKeys
// update (a keys value)
//
// We need:
// hashing function (takes some hashable value and returns a hash code of fixed length)
//

function hash(str) {
  let count = 0
  str.split('').forEach((char) => {
    count += char.charCodeAt()
  })
  return count
}

// console.log(hash("hello"))
// console.log(hash("goodbye"))

class MyHashMap {
  constructor() {
    this.size = 32
    this.data = new Array(this.size)
  }

  // Example:
  // this.data = [undefined, undefined, [key, value, key, value, ...]

  // Utility function to make our hashmap class display in a prettier format
  toString() {
    let result = ''
    result += this.constructor.name
    result += '\n'
    result += `Size: ${this.size}\n`
    result += 'Data:\n'
    for (let i = 0; i < this.data.length; i++) {
      result += `  ${i}: ${this.data[i]}\n`
    }
    return result
  }

  // This is the function that is called when you type in a variable
  // in the node repl
  inspect() {
    return this.toString()
  }

  insert(key, value) {
    const hashCode = hash(key) % this.size
    if (this.data[hashCode]) {
      this.data[hashCode].push(key)
      this.data[hashCode].push(value)
    } else {
      this.data[hashCode] = [key, value]
    }
  }

  // TODO: Implement the search method for our hash map. Remember to account
  // for collisions!
  search(key) {

  }
}

module.exports = MyHashMap
