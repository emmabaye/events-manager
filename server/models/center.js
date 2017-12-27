
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facilities: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    available: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'true',
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  Center.associate = (models) => {
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
    });
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Center;
};
