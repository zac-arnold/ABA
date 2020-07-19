const express = require('express')

// const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log('budget.js cookies ', req.cookies)
  console.log('budget.js body ', req.body)

//   req.loggedIn // bool
//   req.currentUser  // User

//   if (!req.loggedIn) {
//       return res.status(403).json({state: 'err', message: 'Must be logged in'})
//   }

  // save the budget. we know the user is in req.currentUser

  return res.status(201).json({})
})
