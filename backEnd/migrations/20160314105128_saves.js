exports.up = function(knex, Promise) {
  return knex.schema.createTable('saves', function(table){
    table.increments();
    table.string('user_id');
    table.string('cities');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('saves');
};
