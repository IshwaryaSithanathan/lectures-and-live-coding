# 2017-11-15 Graphs and Trees

A tree is a type of graph.

Nodes and edges. Nodes can have names/values. Edges can have values.

Examples:

- dependency tree (npm)
- object heierarchy
- file system
- facebook graph - finding mutual friends
- maps (like google maps) - finding directions
- parsers (tree)
- internet (routing)

Differences between trees and nodes:
- trees (usually) have a root node. Point to it with var `root`.
- Tree cannot contain cycles

# Types of trees:

- Binary tree: each node can have up to two children.
- Binary search tree: all left descendents <= n < all right descendents
- Min-heap tree: A min-heap is a complete binary tree (that is, totally filled other than the rightmost elements on the last
level) where each node is smaller than its children.
  - Insert: add node at bottom leftmost spot. Bubble up: we "fix" the tree by swapping the new element with its parent, until we find an appropriate spot for the element. We essentially bubble up the minimum element.
  - Insert is O(log n)
  - You always know the minimum in the set
- Trie: Each path down the tree may represent a word.
  - Very commonly, a trie is used to store the entire (English) language for quick prefix lookups. While a hash table can quickly look up whether a string is a valid word, it cannot tell us if a string is a prefix of any valid words. A trie can do this very quickly.

# Properties of Trees

include...

"Balanced" = left and right branches differ by <= 1
"Complete" = every level is filled (left to right) except possibly for last one


# Question: Can a node be part of two different trees?

Ex: a min heap and a binary search tree.

Yes! Consider:

```
Node:
  value = 5
  minHeapChildren = [a, z, f, ]
  minHeapParent = myParent
  bstChildren =
  bstParent =
```

# Depth First Search

Can be performed on a tree or a graph.

On a tree, you don't need to track whether the node has been visited in this *recursive* implementation. On a graph you do, so that you avoid infinite cycles.

```
dfs(node):
  if node === null, return
  visit(node) // check if this is the node we want
  node.visited = true
  forEach subNode in node.children:
    if subNode.visited === false:
      dfs(subNode) // recursion!
```

# Breadth First Search

```
bfs(root):
  queue = Queue()
  root.visited = true  // mark at the time of adding to the queue
  queue.enqueue(root)

  while(queue is not empty):
    node = queue.dequeue()
    visit(node) // check if this is the node we want
    foreach subNode in node.children:
      if subNode.visited === false:
        subNode.visited = true  // mark at the time of adding to the queue
        queue.enqueue(n)
```
