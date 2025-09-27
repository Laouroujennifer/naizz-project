require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const Models = require("../models/models");

let sequelize;

if (process.env.NODE_ENV === "production") {
  console.log("Production configuration");

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 3306,
      dialect: "mysql",
      define: {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
      },
      dialectOptions: {
        timezone: "+02:00",
      },
      logging: false,
    }
  );
} else {
  console.log("Developpement configuration");

  sequelize = new Sequelize("naizz", "root", "", {
    host: "127.0.0.1",
    port: "3307",
    dialect: "mariadb",
    define: {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
    },
    dialectOptions: {
      timezone: "+02:00",
    },
    logging: false,
  });
}

const { User } = Models(sequelize, DataTypes);

const initDb = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("The database has been initialized successfully ✅ !");
  } catch (error) {
    console.error("Error initializing database :", error);
  }
};

module.exports = {
  initDb,
  User,
};
