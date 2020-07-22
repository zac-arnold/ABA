const request = require('supertest')

const db = require('../db/clients')
const server = require('../server')

jest.mock('../db/clients', () => {
  return {
    registerUser: jest.fn(),
    login: jest.fn()
  }
})

test('POST /api/v1/register returns an object with a username', () => {
  const newUser = {
    username: 'Pablo SanChez III',
    email: 'hello@gmail.com',
    password: 'ABCdef123'
  }

  db.registerUser.mockImplementation(() => Promise.resolve(
    null
  ))

  db.login.mockImplementation(() => Promise.resolve(
    {
      user: { username: 'Pablo SanChez III' },
      session: { id: '4132fa4' }
    }
  ))

  return request(server)
    .post('/api/v1/register')
    .send(newUser)
    .expect(202)
    .then(res => {
      expect(res.body.username).toBe('Pablo SanChez III')
    })
})
