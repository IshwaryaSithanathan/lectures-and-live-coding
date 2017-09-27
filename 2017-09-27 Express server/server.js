const express = require('express')

const app = express()

app.get('/repeat/:word', (req, res) => {
  // const word = req.params.word;
  const { word } = req.params

  // This is not needed, since req.params.VALUES are always parsed as a string when in the URI: 
  // if (!typeof word === 'string') {
  //   res
  //     .status(400)
  //     .send("Error: Parameter submitted is not a string.")
  // }
  res
    .status(200)
    .set('Content-Type', 'application/text')
    .send(`${word} ${word}`)
})


const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
