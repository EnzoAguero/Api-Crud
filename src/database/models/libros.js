'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  };
  libros.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    fechaLanzamiento : DataTypes.DATE
    
  }, {
    sequelize,
    modelName: 'libros',
  });
  return libros;
};