
exports.up = function(knex) {
  return knex.schema
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
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('classes')
};
