<<<<<<< HEAD
const express = require("express");

//Actualización para desplegar el FRONT-END
const cors = require("cors"); //Permisos sobre el contenido a desplegar
const path = require("path"); //Express servir el frontend

const productoRoutes = require("./routes/productoRoutes");
const tiendaRoutes = require("./routes/tiendaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

const app = express();
const PORT = process.env.PORT || 3000; //Puerto de la App

//Actualización - Permisos cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
=======
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
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
    credentials: true,
  })
);

<<<<<<< HEAD
//Actualización:
//Servir los documentos HTML, CSS, JS

app.use(express.static(path.join(__dirname, "public")));

//http://localhost:3000 -> public>index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Módulos del sistema (archivos HTML en public)
app.get("/clientes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "clientes.html"));
});

app.get("/productos", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "productos.html"));
});

app.get("/tiendas", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tiendas.html"));
});

//Comunicación se realizará JSON
app.use(express.json());

//Rutas
app.use("/api/productos", productoRoutes);
app.use("/api/tiendas", tiendaRoutes);
app.use("/api/clientes", clienteRoutes);
=======
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
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff

//Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado http://localhost:${PORT}`);
});
