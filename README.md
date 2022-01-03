# Prueba tecnica para Sondeos

## Prueba tecnica con **Node.Js**  
La api de Library fue creada con la tecnologia Node.js y su framework Express. Como gestor de bases de datos se utilizó MySQL y como ORM la librería Sequelize.
Para poder utilizar los endpoints en la carpeta scripts existe el archivo "" el cual se ejecuta con la aplicación Postman o la extension de VS Code "Thunder Client"

### ¿Como correr el proyecto?  
Para poder inicializar el proyecto debe correr los comandos:  
**npm install**  
Y luego que se instalen las dependecias:  
**nodemon**

### ¿Como conectarse a la base de datos mediante variables de entorno?  
El archvivo .env.example es un ejemplo de que hay que colocar en el .env

### ¿Como iniciar la base de datos?
-Sequelize db:migrate
-Copiar en su db el script adjunto de .sql

Ejemplo: 
-DB_USERNAME= "player"
-DB_PASSWORD= "diamond123"

### EndPoints

-Listado de libros = api/
-Creacion de libro = api/create
-Edicion de libro = api/edit
-Eliminacion de libro = api/delete

**** extras ****

-Detalle de un libro = api/detail/:id
-Busqueda de un libro =  api/search?title=name