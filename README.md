# Procedimientos

<<<<<<< HEAD
1. 👝 Clonar repositorio
git clone https://github.com/edwleo/electroperu.git

2. ⛏️ Restaurar la BD
=======
1. Clonar repositorio
   git clone [https://..](https://github.com/ElLeoZalds/electroperu.git)

2. Restaurar la Base de Datos

>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
```sql
CREATE DATABASE electroperu;
USE electroperu;

<<<<<<< HEAD
CREATE TABLE productos
(
	id          INT AUTO_INCREMENT PRIMARY KEY,
  descripcion VARCHAR(50) 	NOT NULL,
  garantia    TINYINT 		  NOT NULL,
	precio      DECIMAL(7,2)	NOT NULL
)ENGINE = INNODB;
```

3. 📋 Abrir proyecto _electroperu_ en VSCode

4. Abrir la terminal **CTRL + Ñ** escribir:
```
npm install
```
Se ejecutará la instalación de todas las dependecias definidas en **package.json**
=======
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
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff

5. Crear e ingresar los parámetros en el archivo **.env**

6. Ejecutar el servidor (_nodemon_)
<<<<<<< HEAD
```
nodemon server
```

7. Verificar cada verbo (GET/POST/PUT/DELETE) utilizando PostMan, ThunderClient
=======

```
npm install -g nodemon
nodemon server
```

7. Verificar cada verbo (GET/POST/PUT/DELETE) utilizando PostMan, ThunderClient
>>>>>>> 461d82c3d32cf3d810045bbbc92e79302a6a7eff
