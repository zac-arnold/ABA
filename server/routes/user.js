const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log('user.js: ', req.body)
  const { username, password } = req.body
  const credentials = { username, password }
  return db.getUserByName(credentials)
    .then((response) => res.status(202).json(response))
    .catch(err => {
      return res.status(400).send(err.message)
    })
})
