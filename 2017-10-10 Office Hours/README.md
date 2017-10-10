# 2017-10-10 Office Hours

Agenda:

1. Glossary of terms
2. Fetch & AJAX

## Glossary - what do these terms mean?

### Asynchronous JavaScript

Event Loop

Analogy: One chef in the kitchen of a restaurant. Instead of starting the pasta, waiting on the pasta, and finishing the pasta before going on to something else, the chef starts both things in motion.

```javascript

db.any(`SELECT *...`)
  .then(() => {
    // If the person gave correct credentials, then...
    // set a cookie with the session data
    // redirect to the homepage
    //
    // ELSE:
    // send back a page that says your credentials weren't correct
  })
```

### DOM Manipulation

DOM = Document Object Model

Using javascript to manipulate the *model* of the webpage.

DOM is the model of the webpage you're viewing which is created from the HTML, CSS and JavaScript provided.


### "Traversing the DOM"

Accessing (or traversing) the DOM tree in order to access a particular element or elements on a page.

Example:
Access all the *child* nodes of all `UL` (unordered list) elements in the DOM.

See here for "vanilla" JavaScript DOM traversal: https://www.w3schools.com/js/js_htmldom_navigation.asp

See here for using jQuery to do DOM traversal: http://jqfundamentals.com/chapter/traversing-manipulating


### AJAX

Asychronous Javascript and XML

Often we use it with JSON now, not XML

A few different ways to make an AJAX request:
```javascript
// jQuery
$.get('/api/contacts', {id: 4}, (data) =>
  {
    // update the DOM with the data
    console.log(data)
  }
)

// built-in fetch function
//
fetch('http://yourdomain.com/api/contacts', {
	method: 'get'
}).then(function(response) {
	// update the DOM with the new data
}).catch(function(err) {
	// handle any errors
});

// XMLHttpRequest
// From: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();

```

### API

Application Programming Interface

Example:
GitHub API. GitHub has defined an interface to access GitHub information from code.

Example:
Creating a `database.js` file with some functions like `getAllContacts()` that act as an *interface* to your database. You are exposing an API to the rest of your code for accessing the database.

Example:
Javascript Array
The "API" is the collection of built-in methods to *interface* with an array.


Bonnie's 3 different kinds of APIs:

RESTful web api - like the GitHub api we worked with

JavaScript web api
embedding a Google Map onto your webpage.


Programming APIs -
Example: our `database.js`
Example: Array.forEach, Array.
