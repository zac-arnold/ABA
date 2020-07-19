const express = require('express')

// const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  console.log('logout route ', req.body)
})
