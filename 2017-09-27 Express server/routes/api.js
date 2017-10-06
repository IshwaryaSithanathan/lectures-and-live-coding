const router = require('express').Router()
const {
  getAllContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact
} = require('../database/database_utilities')

// Read route
router.get('/contacts', (req, res) => {
  getAllContacts()
    .then((data) => {
      res
        .status(200)
        .json(data)
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error accessing this information."})
    })
})

// Read route
router.get('/contacts/:id', (req, res) => {
  const { id } = req.params

  getContact(id)
    .then((data) => {
      res
        .status(200)
        .json(data)
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error accessing this information."})
    })
})

// Create route
router.put('/contacts', (req, res) => {
  const { first_name, last_name, phone_num } = req.body

  createContact(first_name, last_name, phone_num)
    .then((data) => {
      const newid = data.contact_id
      res
        .status(201)
        .json({new_contact: `http://localhost:3000/api/contacts/${newid}`})
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error creating this information."})
    })
})

// Update route
router.post('/contacts/:id', (req, res) => {
  const { id } = req.params
  const { first_name, last_name, phone_num } = req.body
  // TODO: write some code to allow them to update not ALL fields

  updateContact(id, first_name, last_name, phone_num)
    .then((data) => {
      res
        .status(200)
        .json(data)
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error updating this information."})
    })
})

// delete route
router.delete('/contacts/:id', (req, res) => {
  const { id } = req.params

  deleteContact(id)
    .then((data) => {
      res
        .status(200)
        .json(data)
    })
    .catch((err) => {
      res
        .status(400) // is this a good status code??
        .json({error: "There was an error deleting this information."})
    })
})

module.exports = router
