var express = require('express');
var router = express.Router();

const {show,create,update,destroy, detail, search} = require('../../Controllers/api/apiController')

/* GET home page. */
router.get('/',show)
router.get('/detail/:id',detail)
router.post('/create',create)
router.put('/edit/:id',update)
router.delete('/delete/:id',destroy)
router.get('/search/',search)


module.exports = router