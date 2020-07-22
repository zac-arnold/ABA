const env = require('../../tests/test-environment')
const db = require('./clients')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.doesUserExist returns a boolean', () => {
  expect.assertions(1)

  const username = 'Bob'

  return db.doesUserExist(username, testDb)
    .then(boolean => {
      expect(boolean).toBeTruthy()
    })
})

test('db.doesUserExist returns a boolean', () => {
  expect.assertions(1)

  const username = 'Pablo'

  return db.doesUserExist(username, testDb)
    .then(boolean => {
      expect(boolean).toBeFalsy()
    })
})
