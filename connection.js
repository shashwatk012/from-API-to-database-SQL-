const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12600706",
  password: "vixAVtHvyx",
  port: 3306,
  database: "sql12600706",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
