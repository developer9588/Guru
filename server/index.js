const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "anshg_guru",
});

app.post("/create", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    `INSERT INTO login_details (email, password) VALUES (?,?)`,
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
