# Live coding an express server

Questions/topics to address:
- [ ] how does one connect an express server with a sql database
- [ ] an example of testing
- [ ] middleware -- how to use bodyParser
- [ ] what do you want us to be able to talk about with middleware

Questions Justin is looking into:
- is req.body defined before using bodyParser?
  - ANSWER: no. `bodyParser` sets the value of `req.body`. To access the body of a request without bodyParser, you would need to add event listeners to process the data stream (`req.on('data', CALLBACK)` and `req.on('end', CALLBACK)`) -- something you may do in P3.


## 2017-09-27 Wednesday Live Coding

We...
- built a basic server
- talked about how to configure the port using environment variables
- talked about what middleware is, and what you need to know to move into P3
- talked about ES6 destructuring syntax
- created a GET route, with a specified status code and content type
- talked about status codes, and what you need to know to move into P3

## 2017-09-29 Friday live coding

Today we...
- Talked about HTTP anatomy and the structure of URLs
  - discussed the difference between URL parameters and query parameters
  - discussed which HTTP METHODS use a body
  - discussed the request-response pattern
  - discussed when you might use GET vs POST, and how to access the parameters and body of the request in express.
- Added bodyParser to our server
- Talked more about the bodyParser middleware and how it works, including how it knows what to parse and what not to parse based on the HTTP method used and the `Content-Type` header.
- Implemented a POST route


**How bodyParser.json() works:**

if HTTP request has a body (ie the method is POST, PUT, DELETE, etc)
and content type is application/json
then...
take the body of this request, parse it into a javascript object, and set req.body to the result
