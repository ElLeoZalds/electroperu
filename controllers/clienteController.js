const db = require("../config/db");

//Crear
exports.crearCliente = async (req, res) => {
  const { apellidos, nombres, dni, telefono, direccion, id_tienda } = req.body;

  if (!apellidos || !nombres || !dni || !telefono || !direccion || !id_tienda) {
    return res.status(400).json({ mensaje: "Falta completar los campos" });
  }

  const sql =
    "INSERT INTO clientes (apellidos, nombres, dni, telefono, direccion, id_tienda) VALUES (?, ?, ?, ?, ?, ?)";

  try {
    const [result] = await db.query(sql, [
      apellidos,
      nombres,
      dni,
      telefono,
      direccion,
      id_tienda,
    ]);

    res.status(201).json({
      id: result.insertId,
      mensaje: "Registrado correctamente",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

//Listar
exports.obtenerClientes = async (req, res) => {
  const sql =
    "SELECT id, apellidos, nombres, dni, telefono, direccion, id_tienda FROM clientes";

  try {
    const [clientes] = await db.query(sql);
    res.status(200).json({ clientes });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
