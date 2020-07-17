const crypto = require('crypto')

async function hash (password, salt) {
  return new Promise((resolve, reject) => {

  crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) reject(err)
      resolve(derivedKey.toString('hex'))
    })
  })
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(async function () {
      // Inserts seed entries
      const password = 'bob'
      const salt = crypto.randomBytes(16).toString('hex')
      const hashedPassword = await hash(password, salt)

      return knex('user').insert([
        { id: 1, username: 'Bob', email: 'bob@bob.com', password: hashedPassword, salt: salt }
      ])
    })
}
