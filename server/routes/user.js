const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log('user.js: ', req.body)
  const { username, password } = req.body
  const credentials = { username, password }
  return db.login(credentials)
  // 2) then, set cookie called "session" with its value being the session ID (the random stuff you put in the session table)
    .then((response) => res.status(202).json(response))
    .catch(err => {
      return res.status(401).send(err.message)
    })
})
