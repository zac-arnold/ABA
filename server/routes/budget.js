const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log(req.cookies)
  return res.status(201).json({})
})
