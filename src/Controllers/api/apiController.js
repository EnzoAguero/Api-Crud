const db = require('../../database/models');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

module.exports = {
    show: (req, res) => {

        db.libros.findAll({
            attributes : [ "id","titulo","autor","precio","fechaLanzamiento" ],
        })
            .then(libros => {
                let empty = {
                    message : 'No se encuentran libros'
                }
                if(!libros.length) {return res.status(404).json(empty)}
                    let response = {
                        meta: {
                            data: libros.length,
                            url: '/api/libros'
                        },
                        data : libros
                    }
                res.send(response)
                 
              }).catch(error => console.log(error))
    },
    create: async (req, res) => {
        console.log(req.body);
        let errores = validationResult(req)

        if (errores.isEmpty()) {
        try {
         const libro = await db.libros.create({
                        titulo : req.body.titulo,
                        autor : req.body.autor,
                        fechaLanzamiento : req.body.fechaLanzamiento,
                        precio : req.body.precio
                    })
                    let response = {
                        meta: {
                            libro,
                            url: '/api/books/' + libro.id
                        },
                        message: 'Libro y autor agregado con éxito'
                    }
                    return res.send(response)
                } catch (error) {
            return res.status(500).json({
                message: 'Hubo un error en el servidor'
            })
        }
    }else{
        let error = {
            message : 'Hay datos invalidos',
            errores : errores.mapped()
        }
        res.send(error)
    }
},
    update: (req, res) => {
        let libroId = req.params.id;
        let errores = validationResult(req)

        if (errores.isEmpty()) {
            db.libros.update(
                {
                    ...req.body
                },
                {
                    where: { id: libroId }
                })
                .then((response) => {
                    response = {
                        meta: {
                            total: response,
                            url: 'api/book/:id'
                        },
                        
                        message: 'Libro actualizado'
                    }
                    res.json(response)
                }).catch(()=> { 
                    let errorBD = {
                    msg: "Error Interno del Servidor",
                };
                res.status(500).json(errorBD);
            })
        }else{
            let error = {
                message : 'Hay datos invalidos',
                errores : errores.mapped()
            }
            res.send(error)
        }

       

    },
    destroy: (req, res) => {

        if(!isNaN(req.params.id)){
            db.libros.findByPk(req.params.id)
            .then(libro =>{
                if(!libro){
                    return res.status(404).json('No existe ese libro');
                }


        db.libros.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
                let response = {
                    meta: {
                        url: '/api/libro/:id',
                        message: 'Libro eliminado'

                    },
                 data:libro
                }
                res.json(response)

            }).catch(error =>{
                const responsedb = {
                    message : "error interno"
                }
    
                res.status(500).json(responsedb);
            })
        })
    }
},

    //************* Metodos extras de crud ******************** */

    detail: (req, res) => {


        db.libros.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(libro => {

                if (libro) {
                    let response = {
                        meta: {
                            status: 200,
                            total: libro.length,
                            url: '/api/book/' + libro.id
                        },
                        data: libro
                    }
                    return res.json(response)
                } else {
                    const errorMsg = new Error()
                    errorMsg.response = {
                        status: 400,
                        message: 'Libro inexistente'
                    }
                    return res.json(errorMsg)

                }

            }).catch(error => console.log(error))
    }

}