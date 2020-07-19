const express = require('express')

const db = require('../db/clients')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  console.log('logout route ', req.cookies)
  const session = req.cookies
  db.deleteSession(session)
  
  // console.log('BEFORE logout route', res.clearCookie('session', { expires: new Date(0) }))
  res.clearCookie('session', { expires: new Date(0) })
  res.redirect('/')
})
