const db = require("../config/db");

exports.crearTienda = async (req, res) => {
  const { tienda } = req.body;

  if (!tienda) {
    return res.status(400).json({ mensaje: "Falta completar los campos" });
  }

  const sql = "INSERT INTO tiendas (tienda) VALUES (?)";

  try {
    const [result] = await db.query(sql, [tienda]);

    //6. Entregar un resultado (PK)
    res.status(201).json({
      id: result.insertId,
      mensaje: "Registrado correctamente",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

exports.obtenerTiendas = async (req, res) => {
  const sql = "SELECT * FROM tiendas ORDER BY id DESC";

  try {
    const [result] = await db.query(sql);
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno en el servidor" });
  }
};

exports.obtenerTiendaPorId = async (req, res) => {
  const { id } = req.params;

  //2. Preparar consulta
  const sql = "SELECT id, tienda FROM tienda WHERE id = ?";

  try {
    const [tiendas] = await db.query(sql, [id]);

    if (tiendas.length == 0) {
      return res.status(404).json({ mensaje: "No encontramos el tiendas" });
    }

    res.status(200).json(tiendas[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

//Actualizar
exports.actualizarTienda = async (req, res) => {
  //Necesitamos parámetro
  const { id } = req.params;

  //Leer un JSON body
  const { descripcion, garantia, precio } = req.body;

  //Validación => ES OBLIGATORIO QUE AL MENOS UNO TENGA DATOS
  if (!descripcion && garantia == undefined && !precio) {
    return res.status(400).json({ mensaje: "Falta completar los campos" });
  }

  //Algoritmo eficiente de actualización
  //NO SE HARÁ => UPDATE productos SET descripcion = ?, garantia = ?, precio = ? WHERE id = ?
  //SE DESARROLLARÁ => UPDATE productos SET precio = ? WHERE id = ?
  let sqlParts = []; //campos que sufrirán actualización
  let values = []; //valores para los campos

  if (descripcion) {
    sqlParts.push("descripcion = ?");
    values.push(descripcion);
  }

  if (garantia != undefined) {
    sqlParts.push("garantia = ?");
    values.push(garantia);
  }

  if (precio) {
    sqlParts.push("precio = ?");
    values.push(precio);
  }

  if (sqlParts.length == 0) {
    return res.status(400).json({ mensaje: "No hay datos por actualizar" });
  }

  //Construir de manera dinámica la consulta
  values.push(id);
  const sql = `UPDATE productos SET ${sqlParts.join(", ")} WHERE id = ?`;

  try {
    const [result] = await db.query(sql, values);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: "No encontramos el producto con el ID" });
    }

    res.status(200).json({ mensaje: "Actualizado correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno en el servidor" });
  }
};

//Eliminar
exports.eliminarProducto = async (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM productos WHERE id = ?"; //¡CUIDADO! DELETE ES IRRESVERSIBLE

  try {
    const [result] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: "Producto no encontrado para eliminar" });
    }

    res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};
