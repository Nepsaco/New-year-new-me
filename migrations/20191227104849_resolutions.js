
exports.up = function(knex) {
    return knex.schema.createTable('resolutions', (table) => {
        table.increments('id')
        table.string('title')
        table.string('description')
        table.string('goal')
        table.timestamp('created at').defaultTo(knex.fn.now())
    })
  
};

exports.down = function(knex) {
      return knex.schema.dropTable('resolutions')
};
