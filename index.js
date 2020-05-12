const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const expressLayout = require("express-ejs-layouts");
const path = require("path");
const adminDB = require("./config/dbconn");
const uuid = require("uuid/v4");

// initialize the storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// initializing the
function fileChecker(req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
let upload = multer({
  storage: storage,
  limits: {
    fileSize: 10000000,
  },
  fileFilter: fileChecker,
});
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "/src")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(expressLayout);
app.set("view engine", "ejs");
adminDB.adminDB.connect((err) => {
  if (err) {
    console.log("unable to connect");
  } else {
    console.log("connected successfully");
  }
});

app.get("/", (req, res) => {
  res.render("adminReg");
});
app.get("/products", (req, res) => {
  res.render("products");
});
app.post("/products/data", upload.single("prod_img"), (req, res) => {
  const {
    product_type,
    product_name,
    product_price,
    product_maker
  } = req.body;
  const url = "http://localhost:4000/";
  let shoe = {
    shoe_name: product_name,
    shoe_price: product_price,
    shoe_maker: product_maker,
    image: url + req.file.path,
  };

  let clothes = {
    cloth_name: product_name,
    cloth_price: product_price,
    cloth_maker: product_maker,
    image: url + req.file.path,
  };

  let phones = {
    phone_name: product_name,
    phone_price: product_price,
    phone_maker: product_maker,
    image: url + req.file.path,
  };

  let bags = {
    bag_name: product_name,
    bag_price: product_price,
    bag_maker: product_maker,
    image: url + req.file.path,
  };

  let wristwatches = {
    Wristwatch_name: product_name,
    Wristwatch_price: product_price,
    Wristwatch_maker: product_maker,
    image: url + req.file.path,
  };
  if (product_type === "Shoes") {
    adminDB.adminDB.query("INSERT INTO Shoes SET ?", shoe, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }
  if (product_type === "Clothes") {
    adminDB.adminDB.query(
      "INSERT INTO Clothes SET ?",
      clothes,
      (err, result) => {
        if (err) throw err;
      }
    );
  }
  if (product_type === "Phones") {
    adminDB.adminDB.query("INSERT INTO Phones SET ?", phones, (err, result) => {
      if (err) throw err;
    });
  }
  if (product_type === "Bags") {
    adminDB.adminDB.query("INSERT INTO Bags SET ?", bags, (err, result) => {
      if (err) throw err;
    });
  }
  if (product_type === "Wristwatches") {
    adminDB.adminDB.query(
      "INSERT INTO Wristwatches  SET ?",
      wristwatches,
      (err, result) => {
        if (err) throw err;
      }
    );
  }
  res.redirect("/products");
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

const port = process.env.PORT || 4000;
app.listen(port, console.log(`administrator server started on port ${port}`));