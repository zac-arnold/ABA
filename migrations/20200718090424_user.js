exports.up = function (knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('email')
    table.string('password')
    table.string('salt')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user')
}
