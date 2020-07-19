const express = require('express')

// const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
//  console.log('logout route ', req.cookies)
//  const sessionId = req.cookies
//  console.log('logout.js', sessionId)
  //   db.deleteSession(sessionId)
  // NEED TO FIND A WAY TO DELETE SESSION FROM DATABASE, CANNOT CHANGE THIS TO A
  // DELETE ROUTE WITHOUT BREAKING CLIENT_SIDE DELETION
  res.clearCookie('session', { expires: new Date(0) })
  res.redirect('/')
})
