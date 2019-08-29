const express = require("express");
const fetch = require("node-fetch");
const mysql = require("mysql");
const app = express();

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "my_db",
//   port: "3306"
// });

// db.connect();

// db.on("error", function(err) {
//   console.log("[mysql error]", err);
// });

// app.get("createdb", (req, res) => {
//   let sql = "CREATE DB nodesql";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created...");
//   });
// });

app.get("/users", (req, res) => {
  fetch("https://koreanjson.com/users")
    .then(response => response.json())
    .then(json => res.send(json))
    .catch(error => console.log(error));
  // const customers = [{ id: 1, firstName: "john" }];
  // res.end(customers);
});

const port = 3600;

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

// [mysql error] { Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost'  ??
