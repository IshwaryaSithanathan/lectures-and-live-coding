# Implementing a Hash Table

- Why do this? Why is this important?

- What is a hash table? What are its other names?

Collection of Key-value pairs, with unique keys
unordered (no promise of maintaining order)
key is hashable

**Operations:**
delete
get/retrieve
insert/update
length (size)
keys
values
entries (gives key and value)

Other names:
Dictionary
Map
~Object
Hash Map

"The quick lazy dog jumps over the brown foxT."
collector = {}
// initialize all A-Za-z keys to be 0
for c in string:
  if (collector[c]) {
    collector[c] = collector[c] + 1
  }
  collector[c] = 1


- When/where is it used?

Javascript objects
Javascript Map object
Trees

- What are its strengths as a data type? Weaknesses? Time complexity?

Strength:
lookup time is O(1) (usually)

Weakness:
Doesn't (always) maintain insertion order
Takes up comparatively large amount of space if there are only 1-2 values.

Strength/weakness:
Default insert operation overwrites previous value if previous value exists

- What are its primary operations? What other operations might we need?

- How does it work?



- Let's implement it!
