const { body,check } = require("express-validator");



module.exports = [

  body("titulo")
    .notEmpty()
    .isLength({ max: 50 })
    .withMessage("Debes ingresar un titulo valido"),

    body("fechaLanzamiento")
    .notEmpty()
    .toDate()
    .withMessage("Debe ser una Fecha válida"),

  body("autor")
  .notEmpty()
    .withMessage("Debes ingresar un nombre de autor valido"),
    

  body("precio")
    .notEmpty()
    .isInt()
    .withMessage("Debe ser un Número"),
];