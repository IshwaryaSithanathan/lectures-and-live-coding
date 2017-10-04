const router = require('express').Router()


router.get('/', (req, res) => {
  res.send("howdy")
})

module.exports = router
