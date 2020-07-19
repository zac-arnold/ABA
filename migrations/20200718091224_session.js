exports.up = knex => {
  return knex.schema.createTable('session', (table) => {
    table.string('id').primary()
    table.string('user_id')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('session')
}
