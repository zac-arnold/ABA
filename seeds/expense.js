exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('expense').insert([
    { id: 1, amount: 400, description: 'rent', category: 'Home', frequency: 30.4375 }
  ])
}
