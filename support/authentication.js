const connection = require('../server/db/connection')

function authentication (req, res, next) {
  // console.log(req.cookies)
  req.loggedIn = false
  req.currentUser = null

  if (typeof (req.cookies.session) === 'undefined') {
    return next()
  }

  // check if there's a session with the cookie's value (this should be the session ID)
  // if not, call next()
  //
  // use the session.user_id to check if there's a user with that ID
  // if not, call next()
  //
  // set req.loggedIn = true
  // set req.currentUser = user
  // call next()
  next()
}

module.exports = {
  authentication
}
