const connection = require('./connection')

module.exports = {
  createClient
}

function createClient (credentials, db = connection) {
  return db('user')
    .where('username', credentials.username)
    .then(user => {
      console.log('client.js ', user)
    })
    .catch(err => console.log(err))
}
