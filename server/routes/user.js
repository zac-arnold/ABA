const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log('user.js: ', req.body)
  const { username, password } = req.body
  const credentials = { username, password }
  return db.getUserByName(credentials)
    .then((res) => {
      console.log('returned user.js ', res.body)
      return res.status(202).res(res[0])
    })
    .catch(err => {
      return res.status(400).send(err.message)
    })
})