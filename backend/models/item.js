'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    
    static associate(models) {
      
    }
  }
  Item.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item'
  });
  return Item;
};