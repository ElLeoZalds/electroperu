//Se hace primero que productoRouters
//Acceso a la DB mysql/promise
const db = require("../config/db");

//Métodos exportados
/**
 * Creamos la exportación al crear el producto, tipo flecha, es asincrono porque tiene que esperar los tiempos.
 * req es la solicitud del usuario y res es la respuesta del programa
 **/
//Crear
exports.crearProductos = async (req, res) => {
  //1. Recepcionar los datos
  const { descripcion, garantia, precio } = req.body;

  //2. Validación backend
  if (!descripcion || garantia == undefined || !precio) {
    return res.status(400).json({ mensaje: "Falta completar los campos" });
  }

  //3. Estructura de la consulta ... "? = comodin" (tiene un índice, similar a un array)
  const sql =
    "INSERT INTO productos (descripcion, garantia, precio) VALUES (?, ?, ?)";

  //4. Transacción
  try {
    //5. Ejecutamos la consulta
    const [result] = await db.query(sql, [descripcion, garantia, precio]);

    //6. Entregar el resultado
    res.status(201).json({
      id: result.insertId,
      mensaje: "Registrado correctamente",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ mensaje: "Error interno del sevidor" });
  }
};

//Listar
exports.obtenerProductos = async (req, res) => {
  //1. Preparar consulta
  const sql = "SELECT id, descripcion, garantia, precio FROM productos";

  //2. Transacción
  try {
    //3. Deserialización
    const [productos] = await db.query(sql);
    //4. Envíamos los resultados
    res.status(200).json(productos);
  } catch (e) {
    console.log(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

//Buscar por ID
exports.obtenerProductosPorId = async (req, res) => {
  //1. Obteniendo el id desde la URL
  //params => http://miweb.com/api/modulo/7
  const { id } = req.params;

  //2. Preparar consulta
  const sql =
    "SELECT id, descripcion, garantia, precio FROM productos WHERE id = ?";

  //3. Transacción
  try {
    //4. Deserialización
    const [productos] = await db.query(sql, [id]);

    //5. Validación
    //No encontramos el producto con el ID enviado
    if (productos.length == 0) {
      //Cuando se ejecuta "return" se FINALIZA el método
      return res.status(404).json({ mensaje: "No encontramos el producto" });
    }

    //6. Envíamos los resultados
    res.status(200).json(productos);
    //res.status(200).json(0);
  } catch (e) {
    console.log(e);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
};

//Actualizar
exports.actualizarProducto = async (req, res) => {
  //Necesitamos un parámetro
  const { id } = req.params;
  //Leer un JSON body
  const { descripcion, garantia, precio } = req.body;

  //Validación => Es obligatorio que al menos uno tenga datos
  if (!descripcion && garantia == undefined && !precio) {
    return res.status(400).json({ mensaje: "Falta completar los campos" });
  }

  //Algoritmo eficiente de actualización
  //No se hará esto => UPDATE productos SET descripcion = ?, garantia = ?, precio = ? WHERE id = ?
  //Se desarrollará => UPDATE productos SET precio = ? WHERE id = ?
  let sqlParts = []; //Campos que sufrirán actualización
  let values = []; //Valores para los campos

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

  //Construir de manera dinánima la consulta
  const sql = `UPDATE productos SET ${sqlParts.join(", ")} WHERE id = ?`;
  values.push(id);

  try {
    const [result] = await db.query(sql, values);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: "No encontramos el producto con el id" });
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

  const sql = "DELETE FROM productos WHERE id = ?"; //¡CUIDADO! DELETE ES IRREVERSIBLE

  try {
    const [ result ] = await db.query(sql, [id]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ mensaje: "Id no encontrado para eliminar" });
    }
    res.status(200).json({ mensaje: "Eliminado correctamente" });
  } catch (e) {
    console.error(e);
    req.status(500).json({ mensaje: "Error interno en el servidor" });
  }
};
