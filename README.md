# Procedimientos

1. Clonar repositorio
   git clone https://..

2. Restaurar la Base de Datos

```sql
CREATE DATABASE electroperu;
USE electroperu;

CREATE TABLE productos	(
	id			    INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50)	NOT NULL,
  garantia	  TINYINT NOT NULL,
  precio		  DECIMAL(7, 2) NOT NULL
)ENGINE = INNODB;
```

3. Abrir el proyecto _electroperu_ en Visual Studio Code

4. Abrir la terminal **CTRL + Ñ** escribir:

```
npm install
```

Se ejecutará la intalación de todas las dependencias definidas en el **package.JSON**

5. Crear e ingresar los parámetros en el archivo **.env**

6. Ejecutar el servidor (_nodemon_)

```
npm install -g nodemon
nodemon server
```

7. Verificar cada verbo (GET/POST/PUT/DELETE) utilizando PostMan, ThunderClient
