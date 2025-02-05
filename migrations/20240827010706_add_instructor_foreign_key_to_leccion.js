/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('leccion', function(table) {
        table.integer('id_instructor').unsigned().notNullable(); // Agrega la columna id_instructor
        table.foreign('id_instructor').references('id').inTable('instructor'); // Define la clave foránea
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('leccion', function(table) {
        table.dropForeign('id_instructor'); // Elimina la clave foránea si se revierte la migración
        table.dropColumn('id_instructor'); // Elimina la columna si se revierte la migración
    });
};
