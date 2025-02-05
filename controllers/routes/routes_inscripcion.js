const crud = require("../CRUDs/CRUD_inscripcion");

async function getAllInscripciones(req, res) {
    const all = await crud.all();
    console.log(all);
    return res.json(all);
}

async function getInscripcion(req, res) {
    const leer = await crud.lectura(req.params.id);
    return res.json(leer);
}

async function removeInscripcion(req, res) {
    const borrar = await crud.eliminar(req.params.id);
    return res.json(borrar);
}

async function createInscripcion(req, res) {
    const crear = await crud.agregar({
        id_leccion: req.body.id_leccion,
        id_alumnos: req.body.id_alumnos,
    });
    console.log("Inscripción agregada", crear);
    return res.json(crear);
}

module.exports = {
    getAllInscripciones,
    getInscripcion,
    removeInscripcion,
    createInscripcion,
};
