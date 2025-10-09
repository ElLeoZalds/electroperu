const express = require('express')

const router = express.Router()

const clienteController = require('../controllers/clienteController')

//Definiendo las rutas
//router.post('/', clienteController.crearProducto)

router.get('/', clienteController.obtenerClientes)


module.exports = router