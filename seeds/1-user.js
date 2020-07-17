const { hash, generateSalt } = require('../support/crypto')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user')
    .then(async function () {
      // Inserts seed entries
      const password = 'bob'
      const salt = generateSalt()
      const hashedPassword = await hash(password, salt)

      return knex('user').insert([
        { id: 1, username: 'Bob', email: 'bob@bob.com', password: hashedPassword, salt: salt }
      ])
    })
}
