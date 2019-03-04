var express = require("express");
var router = express.Router();
var mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_integration"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to DB");
});

router.get("/questions", function(req, res) {
    let sql="Select * from questions";
    conn.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      });
});

router.get("/posts", function(req, res) {
    let sql="Select * from posts";
    conn.query(sql, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
      });
});

module.exports = router;
