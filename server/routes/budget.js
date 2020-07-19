const express = require('express')

// const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log('budgetjs cookies ', req.cookies)
  console.log('budget.js body ', req.body)
  return res.status(201).json({})
})
