const crud = require("../CRUDs/CRUD_leccion");

async function getAllLecciones(req, res) {
    const all = await crud.all();
    console.log(all);
    return res.json(all);
}

async function getLeccion(req, res) {
    try {
        const leer = await crud.lectura(req.params.id);
        return res.json(leer);
    } catch (error) {
        console.error("Error al obtener la lección:", error);
        return res.status(500).json({ message: "Error al obtener la lección" });
    }
}

async function removeLeccion(req, res) {
    try {
        const borrar = await crud.eliminar(req.params.id);
        return res.json(borrar);
    } catch (error) {
        console.error("Error al eliminar la lección:", error);
        return res.status(500).json({ message: "Error al eliminar la lección" });
    }
}

async function createLeccion(req, res) {
    try {
        const crear = await crud.agregar({
            horario: req.body.horario,
            id_instructor: req.body.id_instructor,
        });
        console.log("Lección creada correctamente:", crear);
        return res.json(crear);
    } catch (error) {
        console.error("Error al crear la lección:", error);
        return res.status(500).json({ message: "Error al crear la lección" });
    }
}

module.exports = {
    getAllLecciones,
    getLeccion,
    removeLeccion,
    createLeccion
};
