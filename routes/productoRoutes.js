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
