import request from 'superagent'

const rootUrl = 'http://localhost:3000/api/v1'
const acceptJsonHeader = { Accept: 'application/json' }

export function newClient (form) {
  console.log('api.js ', form)
  return request
    .post(`${rootUrl}/register`)
    .set(acceptJsonHeader)
    .send(form)
    .then(res => {
      console.log('api.js: ', res.body)
      return res.body
    })
    .catch(err => console.log('api.js ', err))
}

export function login (form) {
  console.log('api.js', form)
  return request
    .post(`${rootUrl}/user`)
    .set(acceptJsonHeader)
    .send(form)
    .then(res => {
      console.log('api.js: ', res.body)
      return res.body
    })
    .catch(err => console.log('api.js ', err))
}
