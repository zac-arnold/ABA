exports.up = function (knex) {
  return knex.schema.createTable('expense', table => {
    table.increments('id').primary()
    table.integer('amount')
    table.string('description')
    table.string('category')
    table.integer('frequency')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('expense')
}
