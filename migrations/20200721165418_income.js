exports.up = function (knex) {
  return knex.schema.createTable('income', table => {
    table.increments('id').primary()
    table.string('amount')
    table.string('description')
    table.string('category')
    table.string('frequency')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('income')
}
