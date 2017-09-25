# Office hours 2017-09-21 Testing

# questions

- Difference bt integration and unit tests
- Integration testing -- how to go about testing states of different...
- How to test the in-between parts
- Clean test states -- using fixtures
- Testing async stuff
- Frameworks other than mocha/chai

## Why do we do testing?

- Defensive programming.
- Help guide your approach to creating the code
  - Quality
- To speed up the development process
- To make it clear where the problem is happening.
- To make your code more robust
- **To make sure your code does what you say it will do. -- and only that!**

## What kinds of things do we need to test?

- input validation
- return values
- exception handling
- edge cases
- invalid inputs vs valid inputs

- units - Unit Testing
- integration - Integration Testing

## What varies between the different test types?

- How many things are tested.
- How zoomed out/zoomed in are these tests? Are we testing the whole thing (makes locating errors harder), or are we testing a smaller chunk (doesn't guarantee who thing works.)
- Are we testing a thing or the communication between two+ things?
- Are we testing an individual thing or a whole thing?
- Are we using real resources (databases, web servers, etc) or "stubs"?
- What are we isolating and what are we not?
- Are we testing this ad hoc or building a test/test suite? (ad hoc is useful for testing assumptions, "smoke testing")


## Different Kinds of Tests

**Unit testing** - test a discrete "unit" (or module) of code to ensure that it does what it should. No dependencies on code outside the unit being tested. Any dependencies on outside things need to be "stubbed" or "mocked".

Unit tests test logic in code to show code level correctness. Does it do what you say it does? Fast. Straightforward.

**Integration testing** - test to make sure two or more units/modules are working together. This could be testing if two classes work together, or testing integration with the production environment.

e.g. this worked here in isolation... now lets see if it works on Jenny's machine. Or on our production servers.

e.g. Does the game loop know where the object is, and what color it is? Does the object respond to messages/commands from the game loop to stop, or start, or disappear?

e.g. Test that the module that accesses the database and the module that displays the code on the command line are communicating correctly. If I insert something in the database, does it show up in the command line output? (instead of outputting to command line, you should redirect to a file/string)
