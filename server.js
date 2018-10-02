const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "product_catalogue"
});

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

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
           res.send(JSON.stringify(rows));
            // console.log(rows);
        } else {
            console.log(err);
        }
    })
});