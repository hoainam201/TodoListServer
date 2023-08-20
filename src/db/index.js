const { Sequelize, DataTypes } = require("sequelize");
const pg = require("pg");
require("dotenv").config();
// Khởi tạo kết nối Sequelize đến cơ sở dữ liệu
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectModule: pg,
  }
);

// Kiểm tra kết nối
sequelize
  .authenticate()
  .then(() => {
    console.log("Kết nối thành công đến cơ sở dữ liệu");
  })
  .catch((error) => {
    console.error("Lỗi khi kết nối đến cơ sở dữ liệu:", error);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((error) => {
    console.log("Error synchronizing database:", error);
  });

module.exports = sequelize;
