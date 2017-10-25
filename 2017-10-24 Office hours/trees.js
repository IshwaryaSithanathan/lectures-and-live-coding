class Node {
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

// const head = new Node("A", new Node("B", new Node("D")))

// const head = new Node("A")
// const b = new Node("B")
// const c = new Node("C")
// const d = new Node("D")
// const e = new Node("E")
//
// head.left = b
// b.left = d
// d.left = e
// head.right = c

const head = new Node("A")
head.left = new Node("B")
head.right = new Node("C")
head.left.left = new Node("D")
head.left.left.left = new Node("E")

console.log("Head, left 3 times: ", head.leftXtimes(3))

head.setMyData()
