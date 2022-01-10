var express = require('express');
var router = express.Router();

const validations = require('../../Validations/bookAuth')

const {show,create,update,destroy, detail} = require('../../Controllers/api/apiController')

/* GET home page. */
router.get('/libros',show)
router.get('/libro/:id',detail)

router.post('/libros',validations,create)

router.put('/libro/:id',validations,update)

router.delete('/libro/:id',destroy)




module.exports = router