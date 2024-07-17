/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('registro', table => {
        table.increments('id').primary();
        table.integer('id_leccion').unsigned();
        table.boolean('estado');

        //referencia como clave foranea a el id de la tabla leccion
        table.foreign('id_leccion').references('id').inTable('leccion');
    })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('registro')
};

