const router = require('express').Router()
const { getAllContacts, getContacts } = require('../database/database_utilities')

router.get('/contacts', (req, res) => {
  getAllContacts()
    .then((data) => {
      res
        .status(200)
        .send(data)  // we should change this to .json and ensure our data is formatted correctly, including in edge cases (no contacts)
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error accessing this information."})
    })
})

module.exports = router
