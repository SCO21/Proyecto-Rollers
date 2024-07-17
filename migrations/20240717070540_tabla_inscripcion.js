/**
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('inscripcion', table => {
        table.increments('id').primary();
        table.integer('id_leccion').unsigned();
        table.integer('id_alumnos').unsigned();

        //referencia como clave foranea a el id de la tabla leccion
        table.foreign('id_leccion').references('id').inTable('leccion');
        //referencia como clave foranea al id de la clase alumno
        table.foreign('id_alumnos').references('id').inTable('alumnos');
    })

  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('inscripcion')
};