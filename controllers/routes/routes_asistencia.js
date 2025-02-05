const crud = require("../CRUDs/CRUD_asistencia");

async function getAllAsistencias(req, res) {
    const all = await crud.all();
    console.log(all);
    return res.json(all);
}

async function getAsistencia(req, res) {
    const leer = await crud.lectura(req.params.id);
    return res.json(leer);
}

async function removeAsistencia(req, res) {
    const borrar = await crud.eliminar(req.params.id);
    return res.json(borrar);
}

async function createAsistencia(req, res) {
    const crear = await crud.agregar({
        id_registro: req.body.id_registro,
        id_alumnos: req.body.id_alumnos,
    });
    console.log("Asistencia agregada", crear);
    return res.json(crear);
}

module.exports = {
    getAllAsistencias,
    getAsistencia,
    removeAsistencia,
    createAsistencia,
};
