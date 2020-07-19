const crypto = require('crypto')

function hash (password, salt) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err)
      resolve(derivedKey.toString('hex'))
    })
  })
}

function generateSalt () {
  return crypto.randomBytes(16).toString('hex')
}

function generateSessionId () {
  return crypto.randomBytes(40).toString('hex')
}
module.exports = {
  hash,
  generateSalt,
  generateSessionId
}
