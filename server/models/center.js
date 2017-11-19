'use strict';
module.exports = (sequelize, DataTypes) => {
  var Center = sequelize.define('Center', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    capacity: DataTypes.STRING,
    price: DataTypes.STRING,
    facilities: DataTypes.STRING,
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Center;
};