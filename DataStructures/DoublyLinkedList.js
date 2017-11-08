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

module.exports = {
  DoublyLinkedList,
  DLLNode
}
