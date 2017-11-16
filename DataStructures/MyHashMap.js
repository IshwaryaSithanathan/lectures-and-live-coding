// *** Hashmap ***
//
// Like a javascript object
// Key value pairs.
// aka: Map, Dictionary, Hash Table, Associated Array
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
//
// TODO: Check into ES6 class syntax and static functions.

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

    if (!this.data[hashCode]) {
      this.data[hashCode] = []
    }

    let i = 0
    // If the key is already in this location's array, then replace the value
    while (i < this.data[hashCode].length) {
      if (this.data[hashCode][i][0] === key) {
        this.data[hashCode][i][1] = value
        return
      }
      i += 1
    }

    this.data[hashCode].push([key, value])
  }

  // TODO: Implement the search method for our hash map. Remember to account
  // for collisions!
  search(key) {
    const hashCode = hash(key) % this.size
    let bucket = this.data[hashCode]
    const location = bucket.findIndex((element) => {
      return element[0] === key
    })
    if (location === -1) {
      return undefined
    } else {
      let i = 0
      while (bucket[i][0] !== key) {
        i += 1
      }
      return bucket[i][1]
    }
  }
}

let h = new MyHashMap()
h.insert("hello", "a")
h.insert("helol", "b")
h.insert("howdy", "j")


module.exports = MyHashMap
