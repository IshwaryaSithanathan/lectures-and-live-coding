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

## Next up:

- Implement a POST route
- Build out a SQL database backend
