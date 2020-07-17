const connection = require('./connection')

module.exports = {
  createClient
}

function createClient (credentials, db = connection) {
  console.log('client.js ', credentials)
  return doesUserExist(credentials.username, db)
   .then(exists => {
     if (exists) {
       return Promise.reject(new Error('User exists'))
     }
   })
  //  .then(() => )


}

function doesUserExist (username, db = connection) {
  return db('user')
    .count('id as number')
    .where('username', username)
    .then(rows => {
      console.log('doesUserExist ', rows)
      return rows[0].number > 0
    })
}


//   return db('user')
//     .where('username', credentials.username)
//     .then(user => {
//       console.log('client.js ', user)
//       // if there is NOT a user, then clearly that user doesn't
//       // exist, and we should just return out of the login() function
//       // (probably return null to tell the caller "login didn't work")

//       // if there IS a user, then we need to check:
//       // does credentials.password, when hashed/salted, equal user.password?
//       // you'll need to use the same scrypt stuff we did in the seed file,
//       // something like:
//       // crypto.scrypt(credentials.password, user.salt, 64 .....)
//       // and then with the derivedKey, check if it === user.password
//       //
//       // if it does match, then probably return the user record out of
//       // this function, so that the caller knows "yes the user did log in"
//     })
//     .catch(err => console.log(err))
// }
