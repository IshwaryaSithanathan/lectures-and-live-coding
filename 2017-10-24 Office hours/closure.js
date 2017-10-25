// This closure makes left and right child functionally immutable, and protects access to data by allowing it to be set only through our setter function.
const NodeConstructor = function (data, left, right) {
  // Don't do this, or you'll mutate the *callers* object.
  // data.pop()

  return {
    getLeftChild: () => left,
    getRightChild: () => right,
    setData: (d) => {
      data = d
    },
    getData: () => data,
  }
}

const n = new NodeConstructor('A', null, new NodeConstructor('B'))

console.log(n.getLeftChild()) // null
console.log(n.getData()) // "A"
console.log(n.setData('NEW A'))
console.log(n.getData()) // "NEW A"
n.data = 'Howdy ho'
console.log(n.getData()) // "NEW A"
