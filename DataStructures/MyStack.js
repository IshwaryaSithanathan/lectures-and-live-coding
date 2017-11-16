// Stack
// Last in first out (LIFO)
//
// Operations:
// push(e)
// pop() -> element
// length()?
// peek() -> element
// isEmpty()

class MyStack {
  constructor() {
    this.storage = []
  }

  isEmpty() {
    return this.storage.length === 0
  }

  length() {
    return this.storage.length
  }

  push(element) {
    this.storage.push(element)
    return this
  }

  pop() {
    if (this.storage.length === 0) {
      throw new Error('Cannot pop from an empty stack!! >:-( ')
    }
    return this.storage.pop()
  }

  peek() {
    if (this.storage.length === 0) {
      throw new Error('Cannot peek into an empty stack!! >:-( ')
    }
    return this.storage[this.storage.length - 1]
  }
}

// // Example of chaining:
// const s = new MyStack()
// s.push("howdy").push("heyo").length()

module.exports = MyStack
