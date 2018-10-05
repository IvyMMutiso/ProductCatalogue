const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

let mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "product_catalogue"
});

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

mysqlConnection.connect(err => {
  if (!err) {
    console.log("DB connection succeeded");
  } else {
    console.log(
      "DB connection failed \n Error : ",
      JSON.stringify(err, undefined, 2)
    );
  }
});

//Get all products
app.get("/products", (req, res) => {
  const productsStoredProcedure = `CALL spProducts()`;
  executeQuery(productsStoredProcedure, res);
});

//Add a product
app.post("/products", (req, res) => {
  var product = {
    category_id: req.body.category_id,
    name: req.body.product
  };
  const addProductQuery = "INSERT INTO products SET ?";
  mysqlConnection.query(addProductQuery, product, (err, rows, fields) => {
    if (!err) {
      console.log("Added successsfully");

      res.status(201);
      res.json({ success: true, product_id: rows.insertId });
    } else {
      console.log("Adding failed");

      res.status(404);
      res.json({ success: false, error: err });
    }
  });
});

//Update product
app.patch("/products", (req, res) => {
    var product = [req.body.category_id, req.body.product, req.body.active, req.body.product_id];
    console.log("am here : ", product);
    const updateProductQuery = "UPDATE products SET category_id = ?, name = ?, active = ? WHERE id = ?";
    mysqlConnection.query(updateProductQuery, product, (err, rows, fields) => {
      if (!err) {
        console.log("Updated successsfully");
        res.json({ success: true});
        // res.json({ success: true, category_id: rows.insertId });
      } else {
        console.log("Update failed");
        res.json({ success: false, error: err });
      }
    });
  });

  //delete product
  app.delete("/products", (req, res) => {
    var product = [req.body.product_id];
    // var product = [1, 'Water is', true, 6];
    console.log("am here : ", product);
    const deleteProductQuery = "DELETE FROM products WHERE id = ?";
    mysqlConnection.query(deleteProductQuery, product, (err, rows, fields) => {
      if (!err) {
        console.log("Deleteed successsfully");
  
        res.status(201);
        // res.json({ success: true, category_id: rows.insertId });
      } else {
        console.log("Delete failed");
  
        res.status(404);
        res.json({ success: false, error: err });
      }
    });
  });

//Get all categories
app.get("/categories", (req, res) => {
  const categoriesStoredProcedure = "CALL spAllCategories()";
  executeQuery(categoriesStoredProcedure, res);
});

//Add a category
app.post("/categories", (req, res) => {
  var category = {
    name: req.body.name
  };
  const addCategoryQuery = "INSERT INTO categories SET ?";
  mysqlConnection.query(addCategoryQuery, category, (err, rows, fields) => {
    if (!err) {
      console.log("Added successsfully");

      // res.status(201);
      res.json({ success: true, category_id: rows.insertId });
    } else {
      console.log("Adding failed");

      // res.status(404);
      res.json({ success: false, error: err });
    }
  });
});

//Update category
app.patch("/categories", (req, res) => {
  var category = [req.body.name, req.body.active, req.body.id];
  console.log("am here : ", category);
  const updateCategoryQuery = "UPDATE categories SET name = ?, active = ? WHERE id = ?";
  mysqlConnection.query(updateCategoryQuery, category, (err, rows, fields) => {
    if (!err) {
      console.log("Updated successsfully");
      res.json({ success: true});
      // res.json({ success: true, category_id: rows.insertId });
    } else {
      console.log("Update failed");
      // res.json({ success: false });
      res.json({ success: false, error: err });
    }
  });
});

function executeQuery(query, res) {
  mysqlConnection.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(JSON.stringify(rows[0]));
      // console.log(rows);
    } else {
      console.log(err);
    }
  });
}

app.listen(3000, () => console.log("Express server running at port 3000"));
