const express = require('express');
const db = require('./data/db');
const routesAL =  require('./controllers/routes/routes_alumnos')
const routesIns = require('./controllers/routes/routes_instructor')
const routesLec = require('./controllers/routes/routes_leccion');
const routesInscripcion = require('./controllers/routes/routes_inscripcion');
const routesRegistro = require('./controllers/routes/routes_registro');
const routesAsistencia = require('./controllers/routes/routes_asistencia');
const app = express();

const port = process.env.PORT || 3003
app.listen(port, () =>{
    console.log('application started')
})

app.use(express.json());

//Rutas estudiantes
app.get('/users', routesAL.getAllUsers);
app.get('/:id', routesAL.getUser);
app.post('/', routesAL.postUser);
app.delete('/:id', routesAL.removeUser);

//Rutas Instructores
app.get('/instructores', routesIns.getAllInstructores)
app.get('/instructor/:id', routesIns.getInstructor);
app.post('/instructor/agregar', routesIns.createInstructor);
app.delete('/instructor/:id', routesIns.removeInstructor);

// Rutas leccion
app.get('/lecciones', routesLec.getAllLecciones); 
app.get('/leccion/:id', routesLec.getLeccion); 
app.post('/leccion/agregar', routesLec.createLeccion); 
app.delete('/leccion/:id', routesLec.removeLeccion);    

//Rutas inscripcion
app.get('/inscripciones', routesInscripcion.getAllInscripciones);
app.get('/inscripcion/:id', routesInscripcion.getInscripcion);
app.post('/inscripcion/agregar', routesInscripcion.createInscripcion);
app.delete('/inscripcion/:id', routesInscripcion.removeInscripcion);

// Rutas registro
app.get('/registros', routesRegistro.getAllRegistros);
app.get('/registro/:id', routesRegistro.getRegistro);
app.post('/registro/agregar', routesRegistro.createRegistro);
app.delete('/registro/:id', routesRegistro.removeRegistro);

// Rutas asistencia
app.get('/asistencias', routesAsistencia.getAllAsistencias);
app.get('/asistencia/:id', routesAsistencia.getAsistencia);
app.post('/asistencia/agregar', routesAsistencia.createAsistencia);
app.delete('/asistencia/:id', routesAsistencia.removeAsistencia);