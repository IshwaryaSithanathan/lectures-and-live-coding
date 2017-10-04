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

## 2017-10-02 Monday live coding
### Guest lecturer: Bonnie

**Note: in order to use today's code, you will need to create a `contacts` db:***
```
$ createdb contacts
```

Today we...

- Talked about forking a GitHub repo to contribute when you don't have permissions
- Reviewed previously written code
- Created *database.sql* with commands to create a new database with one table
- Created *seed.sql* to seed our new database with data
- Discussed how to run the commands from the *.sql* files in the desired database
- Installed pg-promise
- Created *database_utilities.js* to hold functions that interface with the database.
- Discussed how pg-promise functions return a promise, and how to make use of the data in the server.js file
- Created a route in server.js that returned JSON from
- Added a Content-Type header to the response object
- Discussed the difference between res.send() and res.json()


## 2017-10-04 REST api

Today we...

- Talked about REST api's and how they're used
- Experimented with the GitHub api and postman to explore use cases and behavior
- Talked about the four REST operations (CRUD) and the HTTP methods used to carry them out.
- Designing your API to expose *resources* -- nouns not verbs.
- The difference between a collection resource and an instance resource
- One of the differences between PUT and POST: that PUT is *idempotent*
- Other best practices in API design, including sending links to related resources in your responses


**NOTES:**

CRUD (C: create, R: read, U: update, and D: delete)

GET
POST
PUT
DELETE
