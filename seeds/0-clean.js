exports.seed = function (knex) {
  const empty = table =>
    () => knex(table).del()

  return empty('expense')()
    .then(empty('user'))
}
