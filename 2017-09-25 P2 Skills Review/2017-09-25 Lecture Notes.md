# 2017-09-25 P2 to P3 Grad Topics & Express server

## What you need to know to get into P3

- Can construct an express app with GET and POST routes, which properly returns JSON with relevant headers and status code.
- Can use `git` (consistent commits, branching) and all typical shell commands for full stack development effectively.
  - Can use a branching strategy where new features are added in branches and then merged back into the master branch. Can use either FF merge or merge-commits.
  - Clearly understands difference between pushing/pulling, committing/merging, fetching, etc.
- Can create an interactive front-end webpage using HTML, CSS and JavaScript which manipulates the DOM based on user interaction.
  - Can create a HTML & CSS web page given a wireframe.
- Skillful in using callbacks and promises for async JavaScript
  - Can test async functions using Mocha and Chai **do a lecture on this**
- Can create a fully functional SQL back-end to an app (using both `pg` and `pg-promise`)
  - Can create a schema to model different types of data, including one-to-one, one-to-many or many-to-many relationships.
- Can use javascript ES6 features, including:
  - arrow functions, template literals, javascript constructors, the `this` operator, `bind` vs `call` vs `apply`
  - Scope and hoisting **do a lecture on this... lots of frinkled foreheads**
  - Closures and IIFE's

## Two ways to merge a branch using git
```
### Merge commit:

-*-*-*-*------------
         \*-*-*-*-*-

git merge feature1 --no-ff

-*-*-*-*------------*
         \*-*-*-*-*-/


### Fast-forward commit (this is the git default):

-*-*-*-*------------
         \*-*-*-*-*-

git merge feature1

-*-*-*-*-*-*-*-*-*-
```
