const express = require("express");
const bcrypt = require("bcryptjs");
const axio = require('axios');
const multer = require("multer");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const adminDB = require("./config/dbconn");
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "/src")));
app.use(expressLayout);
app.set("view engine", "ejs");

// console.log(adminDB.adm)
// 
// axio.get("")
// .then()

app.get("/", (req, res) => {
  res.render("adminReg");
});

app.get("/products", (req, res) => {
  // query the database to display products
  adminDB.adminDB.query("SELECT * FROM Shoes", (err, result) => {
    adminDB.adminDB.query("SELECT * FROM Phones", (err, result2) => {
      adminDB.adminDB.query("SELECT * FROM bags", (err, result3) => {
        adminDB.adminDB.query("SELECT * FROM Clothes", (err, result4) => {
          adminDB.adminDB.query("SELECT * FROM wristwatches", (err, result5) => {
            if (err) throw err;
            res.render("products", {
              name: req.user,
              result,
              result2,
              result3,
              result4,
              result5,
            })
          })
        })
      })
    })
  });
});


app.get("/product/shoe", (req, res) => {
  adminDB.adminDB.query("SELECT * FROM Shoes", (err, data) => {
    if (err) {
      res.json({
        status: false,
        message: "An error occured",
      });
    } else {
      res.json(data);

    }
  });
});

app.get("/product/bag", (req, res) => {
  adminDB.adminDB.query("SELECT * FROM Bags", (err, data) => {
    if (err) {
      res.json({
        status: false,
        message: "An error occured",
      });
    } else {
      res.json(data);
    }
  });
});

app.get("/product/phones", (req, res) => {
  adminDB.adminDB.query("SELECT * FROM Phones", (err, data) => {
    if (err) {
      res.json({
        status: false,
        message: "An error occured",
      });
    } else {
      res.json(data);
    }
  });
});

app.get("/product/watches", (req, res) => {
  adminDB.adminDB.query("SELECT * FROM Wristwatches", (err, data) => {
    if (err) {
      res.json({
        status: false,
        message: "An error occured",
      });
    } else {
      res.json(data);
    }
  });
});

app.get("/product/clothes", (req, res) => {
  adminDB.adminDB.query("SELECT * FROM Clothes", (err, data) => {
    if (err) {
      res.json({
        status: false,
        message: "An error occured",
      });
    } else {
      res.json(data);
    }
  });
});

const port = process.env.PORT || 5000;
app.listen(port, console.log(`administrator server started on port ${port}`));