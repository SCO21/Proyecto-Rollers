const crud = require("../CRUDs/CRUD_instructor");

async function getAllInstructores(req,res) {
    const all = await crud.all();
    console.log(all)
    return res.json(all);
}

async function getInstructor(req,res) {
    const leer = await crud.lectura(req.params.id);
    return res.json(leer)
}

async function removeInstructor(req,res) {
    const borrar = await crud.eliminar(req.params.id);
    return res.json(borrar);
}

async function createInstructor(req,res) {
    try {
        // Asegúrate de que req.body contiene los campos necesarios
        const { cedula, nombre } = req.body;
        
        if (!cedula || !nombre) {
            return res.status(400).json({ error: "Cedula y nombre son requeridos" });
        }

        // Intenta crear el instructor
        const crear = await crud.agregar({ cedula, nombre });

        // Verifica si la creación fue exitosa
        if (!crear) {
            return res.status(500).json({ error: "Error al crear el instructor" });
        }

        console.log("Ingreso correcto", crear);
        return res.status(201).json(crear);  // 201 indica que el recurso fue creado
    } catch (error) {
        console.error("Error en createInstructor:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

module.exports = {
    getAllInstructores,
    getInstructor,
    removeInstructor,
    createInstructor

}





