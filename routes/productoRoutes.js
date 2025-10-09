<<<<<<< HEAD
//RUTAS = acceso a los recursos
//Verbos:
//GET - Obtener, PUT = Actualizar, POST = crear, DELETE = eliminar
const express = require('express')

//Enrutador
const router = express.Router()

//Acceso = Crear, Listar, etc...
const productoController = require('../controllers/productoController')

//Definiendo las rutas
router.post('/', productoController.crearProducto)

router.get('/', productoController.obtenerProductos)

router.get('/:id', productoController.obtenerProductoPorId)

router.put('/:id', productoController.actualizarProducto)

router.delete('/:id', productoController.eliminarProducto)

module.exports = router
=======
//Llama a productoController
//Rutas es el acceso a los recursos
//Verbos: GET = Obtener, PUT = Actualizar, POST = crear, DELETE = eliminar
const express = require("express");
const router = express.Router(); //Enrutador

//Acceso = Crear, Listar, Eliminar, etc
const productoController = require("../controllers/productoController");

//Definiendo las rutas
router.post("/", productoController.crearProductos);

router.get("/", productoController.obtenerProductos);

router.get("/:id", productoController.obtenerProductosPorId);

router.put("/:id", productoController.actualizarProducto);

router.delete("/:id", productoController.eliminarProducto);

module.exports = router;
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
