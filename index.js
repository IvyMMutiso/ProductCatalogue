const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "product_catalogue"
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection succeeded');
    } else {
        console.log('DB connection failed \n Error : ', JSON.stringify(err, undefined, 2));
    }
});

app.listen(3000, ()=>console.log('Express server running at port 3000'));

//Get all categories
app.get('/categories', (req, res)=>{
    mysqlConnection.query('SELECT * FROM categories', (err, rows, fields)=>{
        if(!err){
            console.log(rows);
        } else {
            console.log(err);
        }
    })
});