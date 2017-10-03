const express = require('express')
const bodyParser = require('body-parser')
const { getAllContacts } = require('./database/database_utilities')

const app = express()

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/repeat/:word', (req, res) => {
  // Traditional syntax:
  // const word = req.params.word;
  // ES6 "destructuring" syntax:
  const { word } = req.params
  res
    .status(200)
    .set('Content-Type', 'application/text')
    .send(`${word} ${word}`)
})

// Accepts JSON in the form { a: "cat", b: "dog" }
app.post('/weave', (req, res) => {
  const { a, b } = req.body
  res
    .send(`${a} ${b} ${a} ${b}`)
})

// display all contacts in the db
app.get('/contacts', (req, res) => {
  // indicate that response is JSON
  res.setHeader('Content-Type', 'application/json')
  getAllContacts()
    .then((data) => {
      res.send(JSON.stringify(data))
    })
    .catch((error) => {
      res.send(
        JSON.stringify(
          {message: `An error occurred: ${error.toString()}`
        })
      )
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
