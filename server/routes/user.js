const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { username, password } = req.body
  const credentials = { username, password }
  return db.login(credentials)
    .then(response => {
      const { user, session } = response
      res.cookie('session', session.id, { maxAge: 24 * 60 * 60, httpOnly: true })
      return user
    })
    .then((user) => {
      const { username } = user
      const client = { username }
      res.status(202).json(client)
    })
    .catch(err => {
      return res.status(401).send(err.message)
    })
})
