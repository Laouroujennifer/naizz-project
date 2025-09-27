module.exports = (sequelize, DataTypes) => {
  // User Model
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailAdress: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });


  return {
    User,
  };
};
