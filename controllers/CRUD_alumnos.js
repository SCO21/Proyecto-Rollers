var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3308,
      user: 'root',
      password: 'rollers123',
      database: 'rollersdb',
    },
    searchPath: ['knex', 'public'],
  });

  var user1 = {
    cedula: 104329548,
    nombre: "jose",
    nivel: 1
  }
  let tabla = "alumnos";
  
  async function agregar(add){
    let ingreso = await  knex(tabla).insert(add);
    console.log("El ingreso fue completado con exito", ingreso)
  }
  
  async function eliminar(){
    let eliminacion = await  knex(tabla).where('nombre', "santiago").del();
    console.log("La eliminacion fue completada con exito", eliminacion)
  }
  async function actualizar (){
    let ingreso = await  knex(tabla).where({ id: 16 }).update(
        {
          nombre: "Santiago",
        }
      );
    console.log("El remplazo fue completado con exito", ingreso)
  }
  async function lectura(){
    let ingreso = await  knex.select('nombre', 'cedula', 'nivel').from(tabla);
    console.log(ingreso)
  }
//   agregar(user1)
//   eliminar()
//   actualizar()
// lectura()