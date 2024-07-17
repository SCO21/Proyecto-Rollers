/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('asistencia', table => {
        table.increments('id').primary();
        table.integer('id_registro').unsigned();
        table.integer('id_alumnos').unsigned();

        //referencia como clave foranea a el id de la tabla registro
        table.foreign('id_registro').references('id').inTable('registro');
        //referencia como clave foranea al id de la clase alumno
        table.foreign('id_alumnos').references('id').inTable('alumnos');
    })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('asistencia')
};
