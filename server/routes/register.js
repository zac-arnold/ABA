const express = require('express')

const db = require('../db/clients')

// const schema = require('./validation/schema')
// const middleware = require('./validation/middleware')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  const { username, email, password } = req.body
  const credentials = { username, email, password }
  return db.registerUser(credentials)
    .then(() => {
      const newUser = { username: credentials.username, password: credentials.password }
      // console.log('newUser ', newUser)
      return db.login(newUser)
        .then(response => {
          const { user, session } = response
          res.cookie('session', session.id, { maxAge: 24 * 60 * 60 * 1000 })
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
    .catch(err => {
      return res.status(400).send(err.message)
    })
})
