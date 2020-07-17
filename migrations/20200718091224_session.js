exports.up = knex => {
  return knex.schema.createTable('session', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('session')
}