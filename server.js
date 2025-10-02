//3ro y más importante
const express = require("express");
const productoRouters = require("./routes/productoRoutes");

const app = express();
const PORT = process.env.PORT || 3000; //Puerto de la aplicación | Usa uno o usa el otro

//Comunicación se realizará con JSON
app.use(express.json());

//Rutas
app.use("/api/productos", productoRouters);

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`);
});
