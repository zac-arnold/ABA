import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'
const acceptJsonHeader = { Accept: 'application/json' }

export function newClient (form) {
  console.log('api', form)
  return request
    .post(`${rootUrl}/register`)
    .set(acceptJsonHeader)
    .send(form)
    .then(res => {
      return res.body
    })
    .catch(err => console.log('api.js ', err))
}

export function login (form) {
  return request
    .post(`${rootUrl}/user`)
    .set(acceptJsonHeader)
    .send(form)
    .then(res => {
      return res.body
    })
    .catch(err => console.log('api.js ', err))
}

export function newBudget (budget) {
  console.log('api.js ', budget)
  return request
    .post(`${rootUrl}/budget`)
    .set(acceptJsonHeader)
    .send(budget)
    .then(res => {
      return res.body
    })
    .catch(err => console.log('api.js ', err))
}

export function signout () {
  return request
    .get(`${rootUrl}/logout`)
    .then(response => {
      return response.body
    })
    .catch('Failed to delete cookie from database')
}
