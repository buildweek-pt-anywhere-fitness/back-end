
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: "Example-instructor",
      password: "Example-instructor",
      auth_code: "abc123"
    }
  ])
};
