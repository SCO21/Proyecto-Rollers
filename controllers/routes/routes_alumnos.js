const crud = require("../CRUDs/CRUD_alumnos");

async function getAllUsers(req,res) {
    const all = await crud.all();
    console.log(all)
    return res.json(all);
}

async function getUser(req,res) {
    const leer = await crud.lectura(req.params.id);
    return res.json(leer)
}

async function removeUser(req,res) {
    const borrar = await crud.eliminar(req.params.id);
    return res.json(borrar);
}

async function postUser(req,res) {
    const crear = await crud.agregar({ cedula: req.body.cedula, nombre: req.body.nombre, nivel: req.body.nivel });
    console.log("Ingreso correcto", crear)
    return res.json(crear);
}

module.exports = {
    getAllUsers,
    getUser,
    removeUser,
    postUser

}




