require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    searchPath: process.env.DB_SEARCH_PATH.split(','),
});

let tabla = "inscripcion";

async function agregar(data) {
    let results = await knex(tabla).insert(data);
    return results[0];
}

async function eliminar(identificacion) {
    let results = await knex(tabla).where({ id: identificacion }).del();
    return results[0];
}

async function actualizar(id, data) {
    let results = await knex(tabla).where({ id }).update(data);
    return results[0];
}

async function lectura(id) {
    let results = await knex(tabla).where({ id });
    return results[0];
}

async function all() {
    return knex(tabla);
}

module.exports = {
    agregar,
    actualizar,
    eliminar,
    lectura,
    all,
};
