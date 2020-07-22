const connection = require('./connection')
const { hash, generateSalt, generateSessionId } = require('../../support/crypto')

module.exports = {
  registerUser,
  login,
  doesUserExist,
  getSession
}

function registerUser (credentials, db = connection) {
  return doesUserExist(credentials.username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateSalt())
    .then(async (salt) => {
      return {
        passwordHash: await hash(credentials.password, salt),
        salt
      }
    })
    .then(hashes => {
      return db('user')
        .insert({
          username: credentials.username,
          email: credentials.email,
          password: hashes.passwordHash,
          salt: hashes.salt
        })
    })
    .catch((err) => console.error(err.message))
}

function doesUserExist (username, db = connection) {
  return db('user')
    .count('id as number')
    .where('username', username)
    .then(rows => {
      return rows[0].number > 0
    })
}

function login (credentials, db = connection) {
  return db('user')
    .where('username', credentials.username)
    .select()
    .first()
    .then(user => {
      if (!user) {
        return Promise.reject(new Error('User not found'))
      }
      return user
    })
    .then(async (user) => {
      const password = await hash(credentials.password, user.salt)
      if (user.password === password) {
        return user
      }
      return Promise.reject(new Error('Passwords do not match'))
    })
    .then((user) => {
      const randomString = generateSessionId()
      const objectToInsert = { id: randomString, user_id: user.id }
      return db('session')
        .insert(objectToInsert)
        .then(async () => {
          return {
            session: await getSession(randomString),
            user
          }
        })
    })
}

function getSession (id, db = connection) {
  return db('session')
    .where('id', id)
    .select()
    .first()
}
