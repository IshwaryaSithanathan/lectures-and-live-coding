# Implementing Basic Data Structures

- [x] Stack (LIFO)
- [ ] Queue (FIFO)
  - [ ] enqueue
  - [ ] dequeue
  - [ ] isEmpty
  - [ ] length
  - [ ] peek
- [ ] Linked List
- [x] Doubly Linked List*
- [ ] Tree*
- [ ] Directed graph (2 ways to implement)*
- [ ] Hashmap*


Next time:
- What is a priority queue?


# 2017-11-08 Day 2

Who attempted the challenge I posted?

```
The challenge is in two parts:
1) Implement a `forEach` method on the DLLNode (Doubly Linked List Node) class itself that we created today. The method should take a callback and call it on every subsequent element in the doubly linked list. If the list is a _cycle_ (meaning it loops back on itself) the method should stop when it reaches the node that originally called the function.
2) Write a small test suite in mocha/chai (or jest!) to prove your code works!
```

# Resources

https://channel9.msdn.com/Shows/Going+Deep/Expert-to-Expert-Erik-Meijer-and-Lars-Bak-Inside-V8-A-Javascript-Virtual-Machine

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

The difference between objects and maps:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

- The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
- You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
- A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
- An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
- A Map may perform better in scenarios involving frequent addition and removal of key pairs.
