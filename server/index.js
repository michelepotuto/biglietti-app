const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "concerti",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getUser", (req, res) => {
  const sqlSelect = "SELECT * FROM users";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getTickets", (req, res) => {
  const sqlSelect =
    "SELECT * FROM concert JOIN ticket  ON concert.codeRep = ticket.codeRep";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.get("/api/getCities", (req, res) => {
  const sqlSelect = "SELECT city FROM ticket";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
