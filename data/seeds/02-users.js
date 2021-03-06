
exports.seed = function(knex) {
  return knex('users').insert([
    {
      username: "Instructor",
      password: "Example-instructor",
      auth_code: "abc123"
    },
    {
      username: "Client",
      password: "Example-client",
      class_id: 3
    }
  ])
};
