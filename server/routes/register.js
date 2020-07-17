const express = require('express')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  console.log('register.js: ', req.body)
})
