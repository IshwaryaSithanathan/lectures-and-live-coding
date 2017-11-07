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

// Doubly Linked List
class DoublyLinkedList {
  constructor(head) {
    this.head = head
  }

  // Note: this function does NOT check for a cycle (the linked list connects back on itself), and will loop infinitely if the list is circular.
  forEach(cb) {
    let currentNode = this.head
    while (currentNode !== null) {
      cb(currentNode.data)
      currentNode = currentNode.next
    }
  }
}

class DLLNode {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }

  setNext(dllnode) {
    this.next = dllnode
    // eslint-disable-next-line no-param-reassign
    dllnode.prev = this
    return this
  }

  insert(dllnode) {
    // eslint-disable-next-line no-underscore-dangle
    const _next = this.next 

    // eslint-disable-next-line no-param-reassign
    dllnode.next = _next
    // eslint-disable-next-line no-param-reassign
    dllnode.prev = this
    this.next = dllnode
    _next.prev = dllnode
    return this
  }

  // TODO: Implement a forEach method that...
  //   - can be called on any node in the list
  //   - continues from where it is forward (ie using .next) to the end of the list
  //   - checks for cycles and stops if it is about to loop on itself.
  // forEach(cb) {
  //
  // }
}
