const crud = require("../CRUDs/CRUD_registro");

async function getAllRegistros(req, res) {
    const all = await crud.all();
    console.log(all);
    return res.json(all);
}

async function getRegistro(req, res) {
    const leer = await crud.lectura(req.params.id);
    return res.json(leer);
}

async function removeRegistro(req, res) {
    const borrar = await crud.eliminar(req.params.id);
    return res.json(borrar);
}

async function createRegistro(req, res) {
    const crear = await crud.agregar({
        id_leccion: req.body.id_leccion,
        estado: req.body.estado,
    });
    console.log("Registro agregado", crear);
    return res.json(crear);
}

module.exports = {
    getAllRegistros,
    getRegistro,
    removeRegistro,
    createRegistro,
};
