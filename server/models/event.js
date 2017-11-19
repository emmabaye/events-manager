'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    venue: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Event;
};