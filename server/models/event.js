'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date:{
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
  })
  Event.associate =  (models) => {
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId'
    });
    Event.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Event;
};