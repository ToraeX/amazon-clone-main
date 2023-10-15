// to include the express framework module
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const db = require("./sql");
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

//////////////////////
//POST
/////////////////////

app.post("/addSeller", async (req, res) => {
  const obj = req.body.data;
  const results = await db.addSeller(obj);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});
app.post("/register", async (req, res) => {
  const obj = req.body.data;
  const results = await db.register(obj);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/login", async (req, res) => {
  const obj = req.body.data;
  const results = await db.login(obj);
  if (results.length) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.post("/address", async (req, res) => {
  const obj = req.body.data;
  const results = await db.saveAddress(obj);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/addProducts", async (req, res) => {
  const obj = req.body.data;
  const results = await db.addProducts(obj);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/AddtoCart", async (req, res) => {
  const obj = req.body.data;
  console.log(obj);

  // check if product is already added in the cart;
  const results = await db.checkIsProductAdded(obj);

  if (results.length > 0) {
    const result = await db.updateCartProduct(obj);
    if (result) {
      res.json(true);
    }
  } else {
    const result = await db.insertIntoCart(obj);
    if (result) {
      res.json(true);
    }
  }
});

app.post("/removeCart", async (req, res) => {
  const results = await db.removeCart(req.body.id);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/emptyCart", async (req, res) => {
  const results = await db.emptyCart(req.body.id);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/savePayment", async (req, res) => {
  const obj = req.body.data;
  const session = await db.savePayment(obj);
  let response = {
    success: true,
    sessionId: session,
  };
  if (response) {
    const orderDetails = await db.getLastOrderDetail();
    const email = await db.sendEmail(orderDetails);
    console.log({email});
    if(email){
      res.json(response);
    }
  } else {
    res.json(false);
  }
});

app.post("/saveAddress", async (req, res) => {
  const obj = req.body.data;
  const results = await db.saveAddress(obj);
  if (results) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.post("/OrderConfirmed", async (req, res) => {
  const obj = req.body.data;
  const results = await db.OrderConfirmed(obj);
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

//////////////////////
//GET
/////////////////////

app.get("/getSellers", async (req, res) => {
  const results = await db.getSellers();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getBrands", async (req, res) => {
  const results = await db.getBrands();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getProducts", async (req, res) => {
  const results = await db.getProducts();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getSingleProduct/:id", async (req, res) => {
  const id = req.params.id;
  const results = await db.getSingleProduct(id);
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getcartproducts", async (req, res) => {
  const results = await db.getcartproducts();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getAddress", async (req, res) => {
  const results = await db.getAddress();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.get("/getCountryList", async (req, res) => {
  const results = await db.getCountryList();
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});
app.post("/getProductFromOrderTables", async (req, res) => {
  const obj = req.body.data;
  const results = await db.getProductFromOrderTables(obj);
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

app.post("/searchProducts", async (req, res) => {
  const productName = req.body.data;
  console.log(productName);
  const results = await db.searchProducts(productName);
  if (results.length > 0) {
    res.json(results);
  } else {
    res.json(false);
  }
});

// to run the server
app.listen(3000, () => {
  console.log("server is running on 3000");
});
