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
  const salt = crypto.randomBytes(16).toString('hex')
  return salt
}

module.exports = {
  hash,
  generateSalt
}
