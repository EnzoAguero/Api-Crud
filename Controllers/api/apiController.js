const db = require('../../src/database/models');
const {Op} = require('sequelize');

module.exports = {
    show : (req,res) => {
        
        db.Libros.findAll({
             include : [ 'autores'
             ]
         })
         .then(libros => {
             let response = {
                meta : {
                    status : 200,
                    data :libros.length,
                    url : '/api/' 

                },
                data : libros
             }
             res.json(response)
             
         }).catch(error => console.log(error))
    },
    create : async (req,res) => {
        try {
            const libro = await db.Libros.create({
                ...req.body,

            })
            const actor = await db.autores.create({
                ...req.body
            })
            let response = {
                status : 200,
                meta : {
                    url : '/api/create/' + libro.id + '/' + actor.id
                },
                message : 'Libro y autor agregado con éxito'
            }
            return res.status(200).json(response)
        } catch (error) {
            return res.status(400).json({
                status : 400,
                messages : 'Hubo un error al agregar el libro'
            })
        }
    }, 
    update : (req,res) => {
        let libroId = req.params.id;
        db.Libros.update(
            {
                ...req.body
            },
            {
                where: {id: libroId}
        })
        .then(response => {
                response ={
                    meta: {
                        status: 200,
                        total: response.length,
                        url: 'api/update/:id'
                    },
                    data:response,
                    message: 'Libro actualizado'
                }
                res.json(response)
            }).catch(error => console.log(error))
        
        },
    destroy: (req, res) => {
        db.Libros.destroy({
            where: {
                id: req.params.id
            }})
        .then(()=> {
            let response = {
               meta : {
                   status : 200,
                   url : '/api/delete/:id',
                   message : 'Libro eliminado'

               },
            }
            res.json(response)
            
        }).catch(error => console.log(error))
    },

    //************* Metodos extras de crud ******************** */

    detail : (req,res) => {


         db.Libros.findOne({
            where : {
                id : req.params.id
            },
            include : ['autores']
        })
        .then(libro => {

            if (libro) {
                let response = {
                    meta : {
                        status:200,
                        total : libro.length,
                        url : '/api/detail/' + libro.id
                    },
                    data : libro
                }
                return res.json(response)
            } else {
                const errorMsg = new Error()
                errorMsg.response = {
                    status:400,
                    message : 'Libro inexistente'
                }
                return res.json(errorMsg)
                
            }
            
        }).catch(error => console.log(error))
    },
    search : async (req,res) => {
        console.log(req.query.keywords)
        try {
            let libro = await db.Libros.findAll({
                where : {
                    [Op.or] : [
                        {
                            title :  {
                                [Op.substring] : req.query.keywords +'%'
                            }
                        }
                    ]
                },
                include : ['autores']
            })
            let response = {
                status : 200,
                meta : {
                    total : libro.length ? libro.length : 'No se encontro el libro',
                    url : 'api/search?keywords='
                },
                data : libro
            }
            return res.status(200).json(response)
        } catch (error) {
            console.log(error);

        }
    }
      
}