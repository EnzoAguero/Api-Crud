'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Libros.belongsTo(models.autores,{
        as : 'autores',
        foreignKey :'id',
        onDelete : 'cascade'
      })
    }
  };
  Libros.init({
    title: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Libros',
  });
  return Libros;
};