const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  console.log('register.js: ', req.body)
  const { username, email, password } = req.body
  const credentials = { username, email, password }
  return db.registerUser(credentials)
    .then(() => {
      const newUser = { username: credentials.username, password: credentials.password }
      console.log('newUser ', newUser)
      return db.login(newUser)
        .then((response) => {
          return res.status(202).json(response)
        })
        .catch(err => {
          return res.status(400).send(err.message)
        })
    })
    .catch(err => {
      return res.status(400).send(err.message)
    })
})
