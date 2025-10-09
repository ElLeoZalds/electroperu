🛠️ Procedimientos para levantar el proyecto electroperu
1. 👝 Clonar repositorio
git clone https://github.com/edwleo/electroperu.git

2. ⛏️ Restaurar la Base de Datos

Ejecutar los siguientes comandos SQL en tu gestor (MySQL Workbench, phpMyAdmin, etc.):

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

-- Insertar datos de ejemplo
INSERT INTO productos (descripcion, garantia, precio) VALUES
('Teclado Gamer', 12, 400),
('Monitor 27', 24, 900);

INSERT INTO tiendas (tienda) VALUES 
('Arequipa'),
('Ica'),
('Chincha'),
('Lima');

3. 🖥️ Abrir el proyecto en Visual Studio Code

Abre la carpeta clonada electroperu en VSCode.

4. 💾 Instalar dependencias

Abre la terminal con CTRL + Ñ y ejecuta:

npm install


Esto instalará todas las dependencias definidas en el archivo package.json.

5. 🔐 Crear archivo .env

Agrega los parámetros necesarios para la conexión a la base de datos. Un ejemplo básico:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=electroperu


6. 🚀 Ejecutar el servidor con Nodemon

Primero, asegúrate de tener instalado nodemon de forma global:

npm install -g nodemon


Luego, ejecuta el servidor:

nodemon server
7. Verificar cada verbo (GET/POST/PUT/DELETE) utilizando PostMan, ThunderClient
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
