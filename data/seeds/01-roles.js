
exports.seed = function(knex) {
  return knex('roles').insert([
    {
      name: "client",
      auth_code: "0"
    },
    {
      name: "instructor",
      auth_code: 'abc123'
    }
  ])
};
