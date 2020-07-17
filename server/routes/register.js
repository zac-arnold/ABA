const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  console.log('register.js: ', req.body)
  const { username, email, password } = req.body
  const credentials = { username, email, password }
  return db.createClient(credentials)
})
