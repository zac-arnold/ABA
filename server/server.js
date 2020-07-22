const path = require('path')
const express = require('express')

const cookieParser = require('cookie-parser')
const auth = require('../support/authentication')

const register = require('./routes/register')
const user = require('./routes/user')
// const budget = require('./routes/budget')
const logout = require('./routes/logout')

const server = express()

server.use(cookieParser())
server.use(auth.authentication)

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/register', register)
server.use('/api/v1/user', user)
// server.use('/api/v1/budget', budget)
server.use('/api/v1/logout', logout)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
