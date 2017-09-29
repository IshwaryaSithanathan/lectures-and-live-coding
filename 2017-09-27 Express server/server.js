const express = require('express')
const bodyParser = require('body-parser')

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

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
