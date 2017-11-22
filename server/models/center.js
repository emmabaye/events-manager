
module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    available: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'true',
    },
    image: {
      type: DataTypes.BLOB,
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
