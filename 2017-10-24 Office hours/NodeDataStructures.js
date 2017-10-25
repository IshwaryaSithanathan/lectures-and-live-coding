
class BinaryNode {
  constructor(data, left, right) {
    this.data = data
    // this.children = children.slice()
    this.left = left
    this.right = right
  }

  leftXtimes(x) {
    let result = this
    for (let i=1; i<=x; i++) {
      result = result.left
    }
    return result
  }
}

const head = new BinaryNode("A")
head.left = new BinaryNode("B")
head.right = new BinaryNode("C")
head.left.left = new BinaryNode("D")
head.left.left.left = new BinaryNode("E")

// head.leftXtimes(3)


class Node {
  constructor(data, children = []) {
    this.data = data

    // .slice is important! otherwise this.children is
    // vulnerable to getting mucked up in the calling function.
    // this.children = children.slice()
    this.children = children
  }
}


// This shows the problems with mutable data types
// If
function doSomeThingsToTree() {
  const depth1Children = [new Node("B"), new Node("C")]

  const head = new Node("A", depth1Children)
  console.log("This is the tree before getting mucked up:")
  console.log(head)

  // Now suppose we wanted to do something else with the depth1Children array:
  while (depth1Children.length > 0) {
    console.log("Here's the element we are popping off:", depth1Children.pop())
  }

  console.log("This is the tree AFTER getting mucked up:")
  console.log(head)

}

doSomeThingsToTree()
// This is the tree before getting mucked up:
// Node {
//   data: 'A',
//   children:
//    [ Node { data: 'B', children: [] },
//      Node { data: 'C', children: [] } ] }
// Here's the element we are popping off: Node { data: 'C', children: [] }
// Here's the element we are popping off: Node { data: 'B', children: [] }
// This is the tree AFTER getting mucked up:
// Node { data: 'A', children: [] }
