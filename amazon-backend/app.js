// to include the express framework module
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
// to allow the cross origin headers
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amazon_mobiles",
});

//   connecting database
connection.connect();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// http://localhost:3000/register
app.get("", (req, res) => {
  res.send("hello world");
});
app.post("", (req, res) => {
  res.send("hello world");
});

app.post("/saveAddress", (req, res) => {
  res.send("hello world");
});

app.post("/addSeller", (req, res) => {
  const obj = req.body.data;
  // connect to mysql
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });
  //   connecting database
  connection.connect();

  // insertiung data into mysql table
  var sql = `INSERT INTO seller_details(seller_name,email,password,address,mobile) VALUES('${obj.name}','${obj.email}','${obj.password}','${obj.address}','${obj.mobile}')`;

  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      res.json(true);
    }
  });
});

//REGISTER

app.post("/register", (req, res) => {
  const obj = req.body.data;
  // connect to mysql
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  //   connecting database
  connection.connect();

  // insertiung data into mysql table
  var sql = `INSERT INTO users(name,email,mobile_number,password) VALUES('${obj.name}','${obj.email}','${obj.mob}','${obj.password}')`;

  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      res.json(true);
    }
  });
});

//LOGIN

app.post("/login", (req, res) => {
  const obj = req.body.data;

  // connect to mysql
  //console.log(obj,'value from front end ')

  var sql = `SELECT * FROM users where name = '${obj.username}' and password = '${obj.password}'  `;
  console.log({ sql });
  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.json(false);
      }
      //res.json(true);;
    }
  });
});

app.post("/address", (req, res) => {
  const obj = req.body.data;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  connection.connect();

  var sql = `INSERT INTO address(Name, MobileNumber, Address, Area, Landmark, Pincode, City, State) VALUES('${obj.Name}', '${obj.mob}', '${obj.add}', '${obj.area}', '${obj.landmark}', '${obj.pincode}', '${obj.city}', '${obj.State}')`;
  console.log(obj);
  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      res.json(true);
    }
  });
});



app.get('/getSellers',(req,res) => {
  const obj = req.body.data;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  connection.connect();

  var sql = `SELECT seller_id,seller_name FROM seller_details`;
  console.log({ sql });
  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json(false);
      }
      //res.json(true);;
    }
  });
});

app.get('/getBrands',(req,res) => {
  const obj = req.body.data;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  connection.connect();

  var sql = `SELECT brand_id,brand_name FROM brands`;
  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json(false);
      }
      //res.json(true);;
    }
  });
});

app.get('/getProducts',(req,res) => {
  const obj = req.body.data;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  connection.connect();

  var sql = `SELECT *  FROM products_seller_info`;
  connection.query(sql, (error, results, fields) => {
    // if any errors
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      if (results.length > 0) {
        res.json(results);
      } else {
        res.json(false);
      }
      //res.json(true);;
    }
  });
});



app.post("/addProducts", (req, res) => {
  const obj = req.body.data;

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "amazon_mobiles",
  });

  connection.connect();

  var sql = `INSERT INTO products_seller_info(product_name, brand_id, seller_id, price, specifications, image_path) 
  VALUES('${obj.name}', '${obj.brand}', '${obj.sellerId}', '${obj.price}', '${obj.specs}', '${obj.imagePath}')`;
  console.log(obj);
  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error;
      res.json(false);
    } else {
      console.log(results);
      res.json(true);
    }
  });
});


// to run the server
app.listen(3000, () => {
  console.log("server is running on 3000");
});
