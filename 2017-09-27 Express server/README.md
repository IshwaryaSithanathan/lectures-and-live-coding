# Live coding an express server

*In 5 parts

## 2017-09-27 Wednesday Live Coding

Today we...

- built a basic server
- talked about how to configure the port using environment variables
- talked about what middleware is, and what you need to know to move into P3
- talked about ES6 destructuring syntax
- created a GET route, with a specified status code and content type
- talked about status codes, and what you need to know to move into P3

Questions:

- is req.body defined before using bodyParser?
  - ANSWER: no. `bodyParser` sets the value of `req.body`. To access the body of a request without bodyParser, you would need to add event listeners to process the data stream (`req.on('data', CALLBACK)` and `req.on('end', CALLBACK)`) -- something you may do in P3.


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

HTTP methods:

- GET = Read
- PUT (can be used for create and update)
- POST (can be used for create and update)
- DELETE = Delete a resource
- HEAD = Give me all headers (metadata), no body
- PATCH - supports partial updates. Still in RFC -- not standardized yet.


## 2017-10-05 Building the REST API

*Also see the detailed notes from one learner below under "Learner notes from 2017-10-05, Part 4"*

Today we...

- Talked about using npm scripts like `start`, `db:init`, `db:loadschema` as a way to make our code easily runnable for other developers.
- Mapped out the api routes that we will be creating (see below)
- Discussed the difference between PUT and POST: with PUT you need to send along *all* the fields for the resource, including ones you're not updating. With POST you can only send the ones you're updating. This is because PUT is *idempotent*
- Justin offered a confusing example of PUT vs POST. He's sorry, and will find a clearer one to send along. 😉
- Wrote database functions to *create*, *read* and *delete* contacts.
- Talked about SQL injection attacks, and why it's important to use pg-promise's *parameterized queries* (see: https://github.com/vitaly-t/pg-promise#queries-and-parameters)
- Wrote a RESTful route for getting all contacts

After office hours:
- Added the `pg-monitor` library to allow easy logging of all SQL queries

Next up:
- Write the database function to update a contact
- Write routes for getting a single contact, creating a contact, deleting a contact and updating a contact



GET /contacts
GET /contacts/:id
(create) PUT /contacts

(update) POST /contacts/:id
{
  "phone_num": "555-123-4567"
}

(delete) DELETE /contacts/:id


IF we were using PUT for an update, it would have to look like this:
```
(update) PUT /contacts/1
{
  "first_name": "Bonnie",
  "last_name": "Schulkin",
  "phone_num": "555-123-4567"
}
```

## 2017-10-06 Completing our REST api

Today we...

- Looked at using `pg-monitor` to see the queries made to your database
- Wrote a database function to update a contact (the caveat: currently you must provide all fields to make an update, even though it's a POST request)
- Wrote routes to read an individual contact, update a contact, delete a contact and create a contact.
- Discussed REST conventions, including:
  - When designing routes your HTTP method is your "verb" and your path is your "noun". You can GET (read) all `/contacts`, or a single contact by `/contacts/:id`. You can POST (update) a single contact at `/contacts/:id`.
  - What you do *NOT* want to do is make a route to update a single contact at `/contacts` where you pass the id in the body.
- Talked about the "separation of concerns": how our database file doesn't need to (and shouldn't!) know anything about our server or routes file, and vice versa. Your database file should "expose an API" to the rest of your application that is just the set of functions to access the data.
- Celebrated! 🎉 We made a REST api!!


# Learner notes from 2017-10-05, Part 4

## Recap from last time:

Built an express app, made routes for weave and repeat. Created new folder for routes. Set up a database schema.

## Pre-work today from Justin:
- created scripts in package.json to set up database
- added nodemon as devDependency.

## Resources

- GET = read
- PUT (can be used to create and update)
- POST (can be used to create and update)
- DELETE = Delete a resource
- HEAD = Give me all headers (metadata), no body
- PATCH - supports partial updates. Still in RFC -- not standardized yet.

## Today:

- We need to add database functions to add and delete contacts.
- We need to map out what our REST Api will look like.

## Routes we need to create:

- GET /contacts (collection resource)
- GET /contacts/:id (instance resource)
- (create) PUT /contacts

Major difference between POST and PUT: When using PUT, you must include all of the information on that contact, or else the other fields will get overwritten with nothing.

(This is what we are using).
- (update) POST /contacts/:id
  {
    "phone-num": "555-123-4567"
  }

(We are not using this, but this is how you would.)
- (update) PUT /contacts/:id
  {
    "first_name": "Bonnie",
    "last_name": "Schulkin",
    "phone_num": "555-123-4567"
  }

- (delete) DELETE /contacts/:id

## Next, we are going to create some database functions.

const getAllContacts = () => {
  // returns a promise
  return db.any('SELECT * FROM contacts')
}
(Note - we are returning db.one because these are promises that we are returning. Once we return the promise, we can then work with the data.)

The $1 is part of the PG Promise Library and prevents SQL Injection.

const getContact = (id) => {
  return db.one(`SELECT * FROM contacts WHERE contact_id=$1 LIMIT 1`,
    [id])
}

const createContact (first_name, last_name, phone_num) => {
  return db.one(` INSERT INTO contacts (first_name, last_name, phone_num) VALUES ($1, $2, $3)`, [first_name, last_name, phone_num])
}

Simple way to test these functions before calling them in routes is to call them in the queries file.

If you want data back from an INSERT INTO query, you need to include a 'RETURNING' line at the end.
db.one is expecting exactly one result returned.

const deleteContact = (id) => {
  return db.any(`DELETE FROM contacts WHERE contact_id=$1`, [id])
}

(Running low on time so jumping over to using the functions we wrote in a route).

## Connecting db function to route!

(We are just trying to display the data, not make it pretty for now.)

router.get('/contacts', (req, res) => {
  getAllContacts()
    .then(data => {
      res.status(200)
      res.send(data);
      })
    .catch(err => {
      res.status(400) //not sure if this is the best status code.
      res.send({ error: "There was an error accessing this information"});
      })
  })

We visited the route in postman and it returned JSON. Yay!
Format the error message as JSON so that whoever is working with the api can also work with that error.
