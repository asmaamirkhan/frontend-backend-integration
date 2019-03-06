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

router.post("/pageInfo", function(req, res) {
  let sql = "Select * from page_details where page_name = (?)";
  conn.query(sql, [req.body.page_name], function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.post("/getform", function(req, res) {
  let sql = "Select * from forms where form_name = (?)";
  conn.query(sql, [req.body.form_name], function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.post("/getformoptions", function(req, res) {
  let sql = "Select * from form_options where form_name = (?)";
  conn.query(sql, [req.body.form_name], function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/questions", function(req, res) {
  let sql = "Select * from questions";
  conn.query(sql, function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

router.get("/posts", function(req, res) {
  let sql = "Select * from posts";
  conn.query(sql, function(error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

module.exports = router;
