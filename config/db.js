<<<<<<< HEAD
//Acceso a datos

//Acceder al archivo .env
require('dotenv').config()

//Administrar la BD (promesa = proceso en curso...)
const mysql = require('mysql2/promise')

//Pool de conexiones = acceso
=======
//Acceso a datos y el primero que se hace en orden

//Acceder al archivo .env y su configuración  
require("dotenv").config();

//Administrar la BD (promesa = proceso en curso...)
const mysql = require("mysql2/promise");

//Pool de conexiones = acceso a los usuarios
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
<<<<<<< HEAD
  port: process.env.DB_PORT
})

//Aprovechar el recurso en otra parte de la App
module.exports = pool
=======
  port: process.env.DB_PORT,
});

//Aprovechar el recurso en otra parte de la aplicación
module.exports = pool;
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
