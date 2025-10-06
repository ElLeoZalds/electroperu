//3ro y más importante
const express = require("express");

//Actualización para desplegar el Front-End
const cors = require("cors"); //Permisos sobre el contenido a desplegar
const path = require("path"); //Express pueda servir el frontend

const productoRouters = require("./routes/productoRoutes");

const app = express();
const PORT = process.env.PORT || 3000; //Puerto de la aplicación | Usa uno o usa el otro

//Actualización - permisos cors
app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    credentials: true,
  })
);

//Actualización
//Servir los documentos HTML, CSS, JS
app.use(express.static(path.join(__dirname, "public")));

//http://localhost:3000 -> public > index.html
app.get("/", (req, res) => {
  //Al colocar solo "/" deberia reconocer la raíz
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Comunicación se realizará con JSON
app.use(express.json());

//Rutas
app.use("/api/productos", productoRouters);

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`);
});
