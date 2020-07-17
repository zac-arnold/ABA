exports.up = knex => {
  return knex.schema.createTable('budget', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('name')
    table.string('amount')
    table.category('string')
    table.occurrance('string')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('budget')
}
