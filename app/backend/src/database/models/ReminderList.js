module.exports = (sequelize, DataTypes) => {
  const ReminderList = sequelize.define('ReminderList', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
  }, {
    tableName: 'reminder_lists',
    underscored: true,
    timestamps: false,
  });

  return ReminderList;
}
