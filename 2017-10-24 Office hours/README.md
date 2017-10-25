# 2017-10-24 Office Hours

# Algorithms

**What support to folks want?**

Varying levels/difficulties of algorithms.
- Suggest: focus on string manipulation

Big-O time complexity, space complexity
How do you determine it?

Implementations of linked lists, doubly linked lists, stacks, queues.

How to implement a hash table in javascript.
*Come back to this*

- [ ] Put together a resource list of algorithm and interviewing resources.
- [ ] Lecture: Talk about recursion
- [ ] Implementation of binary tree. Depth first search. Breadth first search.
- [ ] Deep dive into data structures, how does V8 implement the data structures?

Javascript under the hood:
stack = call stack
queue = queue up what code to run next (event loop)
heap =


Implementing a tree: [NodeDataStructures.js]('./NodeDataStructures.js')


## How to change an object without mutating it:

```js

/////////////////////////////
// How to change an object without mutating it:
//
let a = {
  c: "cow",
  d: "dog"
}

function changeCowToApple(obj) {
  return Object.assign({}, obj, {
    c: "Apple"
  })
}

let newA = changeCowToApple(a)

newA === a  // false
console.log(a)
// {
//   c: "cow",
//   d: "dog"
// }


```
