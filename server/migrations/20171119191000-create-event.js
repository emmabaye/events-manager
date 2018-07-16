module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    venue: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'holding',
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
      onDelete: 'cascade'
    },
    centerId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Centers',
        key: 'id',
      },
      allowNull: true,
      onDelete: 'set null',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events'),
};
