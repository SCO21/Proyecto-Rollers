/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('leccion', table => {
        table.increments('id').primary();
        table.date("horario");
        table.integer('id_instructor').unsigned();

        table.foreign('id_instructor').references('id').inTable('instructor');
    })


  
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('leccion');
  };
