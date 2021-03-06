
exports.up = async function(knex) {
  await knex.schema
  .createTable('classes', tbl => {
      tbl.increments()
      tbl.string('name', 128).notNullable()
      tbl.string('type', 128).notNullable()
      tbl.string('start_time', 128).notNullable()
      tbl.string('duration', 128).notNullable()
      tbl.string('intensity_level', 128)
      tbl.string('location', 128).notNullable()
      tbl.integer('registered')
      tbl.integer('max_class_size')
  })

  await knex.schema.createTable('roles', (table) => {
    table.increments()
    table.text('name').notNullable()
    table.text('auth_code').defaultTo("0")
  })

  await knex.schema.createTable('users', (table) => {
    table.increments()
    table.text('username').notNullable().unique()
    table.text('password').notNullable()
    table.text('auth_code').defaultTo("0")
    table.text('class_id')
      .unsigned()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('classes')
    await knex.schema.dropTableIfExists('roles')
    await knex.schema.dropTableIfExists('users')
};
