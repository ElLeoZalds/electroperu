const express = require("express");

//Enrutador
const router = express.Router();

//Acceso = Crear, Listar, etc...
const tiendaController = require("../controllers/tiendaController");

//Definiendo las rutas
router.get("/", tiendaController.obtenerTiendas);
router.post("/", tiendaController.crearTienda);

module.exports = router;
