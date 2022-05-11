const express = require("express");
const mysql = require("mysql2");
const app = express();

var db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "todos",
});

// connect to the database
async function connect() {
  await db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });
}

connect();
app.get("/", function (req, res) {
  var sql = "SELECT * FROM account";
  db.query(sql, function (err, results) {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/hello", function (req, res) {
  res.status(200).json("Hello app 03");
});

app.listen(3003, () => {
  console.log("app listening on port 3003");
});
