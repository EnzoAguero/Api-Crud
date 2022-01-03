 /* const db = require('.././src/database/models'); */

module.exports = {
    add : (req,res) => {
        return res.render('addBook')

    },
    save : (req,res) =>{
  
        db.Libros.create({
        name: req.body.name.trim(),
        price: req.body.price,
        }).then(libro => {
          db.Actores.create({
            name : req.body.mark.trim(),
            libro_id : libro.id
          }).then(result => res.redirect('/'))
        
      }).catch(error => console.log(error))

    }
    
    
} 