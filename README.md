# ⚡ ElectroPeru

Proyecto Node.js + MySQL para la gestión de productos, tiendas y clientes.

## 🛠️ Procedimientos para levantar el proyecto

### 1. 👝 Clonar el repositorio

```bash
git clone https://github.com/edwleo/electroperu.git
cd electroperu
```

---

### 2. ⛏️ Restaurar la Base de Datos

Ejecuta los siguientes comandos SQL en tu gestor favorito (MySQL Workbench, phpMyAdmin, consola, etc.):

```sql
-- Crear la base de datos
CREATE DATABASE electroperu;
USE electroperu;

-- Crear tabla de productos
CREATE TABLE productos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50)  NOT NULL,
  garantia    TINYINT      NOT NULL,
  precio      DECIMAL(7,2) NOT NULL
) ENGINE=INNODB;

-- Crear tabla de tiendas
CREATE TABLE tiendas (
  id     INT AUTO_INCREMENT PRIMARY KEY,
  tienda VARCHAR(50) NOT NULL,
  CONSTRAINT uk_tienda UNIQUE (tienda)
) ENGINE=INNODB;

-- Crear tabla de clientes
CREATE TABLE clientes (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  apellidos  VARCHAR(100) NOT NULL,
  nombres    VARCHAR(100) NOT NULL,
  dni        CHAR(8)      NOT NULL,
  telefono   CHAR(9)      NOT NULL,
  direccion  VARCHAR(100) NOT NULL,
  id_tienda  INT,
  FOREIGN KEY (id_tienda) REFERENCES tiendas(id)
) ENGINE=INNODB;

-- Insertar datos de ejemplo en productos
INSERT INTO productos (descripcion, garantia, precio) VALUES
('Teclado Gamer', 12, 400),
('Monitor 27', 24, 900);

-- Insertar datos de ejemplo en tiendas
INSERT INTO tiendas (tienda) VALUES 
('Arequipa'),
('Ica'),
('Chincha'),
('Lima');
```

---

### 3. 🖥️ Abrir el proyecto en Visual Studio Code

```bash
code .
```

---

### 4. 💾 Instalar dependencias

```bash
npm install
```

---

### 5. 🔐 Crear archivo `.env`

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=electroperu
```


---

### 6. 🚀 Ejecutar el servidor con Nodemon

Instalar `nodemon` si no lo tienes:

```bash
npm install -g nodemon
```

Ejecutar el servidor:

```bash
nodemon server
```

---
