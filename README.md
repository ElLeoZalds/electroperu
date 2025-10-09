# ⚡ ElectroPeru

Proyecto Node.js + MySQL para la gestión de productos, tiendas y clientes.

## 🛠️ Procedimientos para levantar el proyecto

### 1. 👝 Clonar el repositorio

```bash
git clone https://github.com/edwleo/electroperu.git
cd electroperu
2. ⛏️ Restaurar la Base de Datos
Ejecuta los siguientes comandos SQL en tu gestor favorito (MySQL Workbench, phpMyAdmin, etc.):

sql
Copiar código
CREATE DATABASE electroperu;
USE electroperu;

CREATE TABLE productos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50)  NOT NULL,
  garantia    TINYINT      NOT NULL,
  precio      DECIMAL(7,2) NOT NULL
) ENGINE=INNODB;

CREATE TABLE tiendas (
  id     INT AUTO_INCREMENT PRIMARY KEY,
  tienda VARCHAR(50) NOT NULL,
  CONSTRAINT uk_tienda UNIQUE (tienda)
) ENGINE=INNODB;

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

-- Datos de ejemplo
INSERT INTO productos (descripcion, garantia, precio) VALUES
('Teclado Gamer', 12, 400),
('Monitor 27', 24, 900);

INSERT INTO tiendas (tienda) VALUES 
('Arequipa'),
('Ica'),
('Chincha'),
('Lima');
3. 🖥️ Abrir el proyecto en Visual Studio Code
Abre la carpeta clonada con:

bash
Copiar código
code .
4. 💾 Instalar dependencias
Abre la terminal con Ctrl + Ñ o desde el menú Terminal > Nueva terminal, luego ejecuta:

bash
Copiar código
npm install
5. 🔐 Crear archivo .env
Crea un archivo .env en la raíz del proyecto con la siguiente configuración:

ini
Copiar código
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=electroperu
Reemplaza tu_clave por tu contraseña real de MySQL.

6. 🚀 Ejecutar el servidor con Nodemon
Primero instala nodemon globalmente (si no lo tienes):

bash
Copiar código
npm install -g nodemon
Luego, inicia el servidor con:

bash
Copiar código
nodemon server
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
