# Prueba tecnica para Sondeos

## Prueba tecnica con **Node.Js**  
La api de Library fue creada con la tecnologia Node.js y su framework Express. Como gestor de bases de datos se utilizó MySQL y como ORM la librería Sequelize.
Para poder utilizar los endpoints en la carpeta scripts existe el archivo "data.sql" el cual se ejecuta con la aplicación Postman o la extension de VS Code "Thunder Client"

### ¿Como correr el proyecto?  
Para poder inicializar el proyecto debe correr los comandos:  
**npm install**  
Y luego que se instalen las dependecias,instalar unas aparte:
**npm install sequelize-cli**
**npm install nodemon**  
Ejecutar **nodemon** en la terminal.

### ¿Como conectarse a la base de datos mediante variables de entorno?  
El archvivo .env.example es un ejemplo de que hay que colocar en el .env

### ¿Como iniciar la base de datos?
1)Sequelize db:migrate;
2)Copiar en su db el script adjunto de .sql.

Ejemplo: 
-DB_USERNAME= "player";
-DB_PASSWORD= "diamond123";

### Versiones

**MySql** Version 8.0
**Sequelize** 6.12.4


### EndPoints

-Listado de libros = **api/libros**;
-Creacion de libro = **api/libros**;
-Edicion de libro = **api/libro/:id**;
-Eliminacion de libro = **api/libro/:id**;

**** extras ****

-Detalle de un libro = **api/libro/:id**;

