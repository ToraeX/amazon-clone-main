const mysql = require("mysql");
const { promises } = require("nodemailer/lib/xoauth2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amazon_mobiles",
});

connection.connect();

checkIsProductAdded = (obj) => {
  return new Promise((resolve, reject) => {
    var sql_check = `SELECT 1 FROM cart WHERE product_id =  '${obj.product_id}' and user_id = '${obj.user_id}'; `;
    console.log({ sql_check });
    connection.query(sql_check, (error, results, fields) => {
      // if any errors
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};

addProducts = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO products_seller_info(product_name, brand_id, seller_id, price, specifications, image_path) 
    VALUES('${obj.name}', '${obj.brand}', '${obj.sellerId}', '${obj.price}', '${obj.specs}', '${obj.imagePath}')`;
    console.log(obj);
    connection.query(sql_check, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};

updateCartProduct = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `UPDATE cart SET quantity = quantity + 1 WHERE product_id =  '${obj.product_id}' and user_id = '${obj.user_id}'; `;
    connection.query(sql, (error, results, fields) => {
      // if any errors
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

login = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM users where name = '${obj.username}' and password = '${obj.password}'  `;
    console.log({ sql });
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
};

saveAddress = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO address(name, mobileNumber, area, landmark, address, pincode, city, state,country_id,user_id) VALUES('${obj.name}', '${obj.mob}', '${obj.address}',
     '${obj.area}', '${obj.landmark}', '${obj.pincode}', '${obj.city}', '${obj.state}','${obj.countryId}','${obj.userId}')`;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

register = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO users(name,email,mobile_number,password) VALUES('${obj.name}','${obj.email}','${obj.mob}','${obj.password}')`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

addSeller = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO seller_details(seller_name,email,password,address,mobile) VALUES('${obj.name}','${obj.email}','${obj.password}','${obj.address}','${obj.mobile}')`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

address = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO address(Name, MobileNumber, Address, Area, Landmark, Pincode, City, State) VALUES('${obj.Name}', '${obj.mob}', '${obj.add}', '${obj.area}', '${obj.landmark}', '${obj.pincode}', '${obj.city}', '${obj.State}')`;
    console.log(obj);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

insertIntoCart = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO cart(user_id,product_id,product_name, price, image_url,quantity	) 
        VALUES('${obj.user_id}','${obj.product_id}', '${obj.product_name}', '${obj.price}', '${obj.image_url}','1')`;
    console.log(obj);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

removeCart = (id) => {
  return new Promise((resolve, reject) => {
    var sql = `DELETE FROM cart where id = ${id};`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

emptyCart = () => {
  console.log("emptyCart coming");
  return new Promise((resolve, reject) => {
    var sql = `TRUNCATE TABLE cart;`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log(results);
        resolve(true);
      }
    });
  });
};

getCountryList = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM country_master;`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getBrands = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT brand_id,brand_name FROM brands`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getSellers = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT seller_id,seller_name FROM seller_details`;
    console.log({ sql });
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

OrderConfirmed = (obj) => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT a.*,b.address,b.name,b.landmark,b.area,b.pincode,b.city,b.state FROM orders a
    INNER JOIN address b on a.address_id = b.id 
    WHERE 1 and a.user_id = '${obj.userId}'`;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getAddress = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM address`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getProducts = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT *  FROM products_seller_info`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getSingleProduct = (id) => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM products_seller_info WHERE product_id = ${id}`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

getcartproducts = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM cart`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({ results });
        resolve(results);
      }
    });
  });
};

savePayment = (obj) => {
  return new Promise(async (resolve, reject) => {
    const productData = await getProductIdsFromCart();
    const { product_ids, total_price } = productData[0];
    const isOrderCreated = await createOrder(product_ids, total_price, obj);
    if (isOrderCreated) {
      const session_id = await updateOrderNumber();
      console.log("session_id", session_id);
      if (session_id) {
        let isCartDeleted = await emptyCart();
        if (isCartDeleted) {
          resolve(session_id);
        }
      }
    }
  });
};

createOrder = (product_ids, total_price, obj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO orders(product_id, total_price, address_id, payee_name, card_number, expiry_date, cvv,user_id) 
    VALUES('${product_ids}', '${total_price}', '${obj.address}',
     '${obj.name}', '${obj.cardNumber}', '${obj.expiry}', '${obj.cvv}','${obj.userId}')`;

    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

updateOrderNumber = () => {
  return new Promise(async (resolve, reject) => {
    // pulling the highest order id
    let orderDetails = await getOrderId();
    const { tableId } = orderDetails[0];
    // org code
    let orgCode = "AWC";
    let randNumber = generateString(4);
    let dateformat = generateDate();
    let OrderNumber = `${orgCode}-${tableId}-${randNumber}-${dateformat}`;
    let session_id = generateString(4);
    let cartUpdate = await updateCartSessionId(session_id);
    if (cartUpdate) {
      var sql = `UPDATE orders SET order_number = '${OrderNumber}' , session_id = '${session_id}'  WHERE order_id =  '${tableId}'`;
      connection.query(sql, (error, results, fields) => {
        // if any errors
        if (error) {
          throw error;
          resolve(false);
        } else {
          resolve(session_id);
        }
      });
    }
  });
};
updateCartSessionId = (session_id) => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE cart SET session_id = '${session_id}';`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

generateDate = () => {
  let objectDate = new Date();
  return (
    objectDate.getDate() +
    "-" +
    objectDate.getMonth() +
    "-" +
    objectDate.getFullYear()
  );
};

generateString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.toUpperCase();
};

getOrderId = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT max(order_id) as tableId FROM orders`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};

getProductIdsFromCart = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT GROUP_CONCAT(product_id) product_ids ,sum(price) as total_price FROM cart`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};

getProductFromOrderTables = (obj) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products_seller_info WHERE product_id IN (${obj.productId});`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};

searchProducts = (productName) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products_seller_info WHERE product_name LIKE '%${productName}%';`;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
};
sendEmail = (orderDetails) => {
  return new Promise((resolve, reject) => {
    console.log({orderDetails})
    const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          secure: false,
          requireTLS: true,
             auth: {
                 user: "raunakwalde59@gmail.com",
                 pass: "cbiv qxbh zeph geqj"
             }
     });
     let details = {
      to : "pratikr500@gmail.com,yashraut1610@gmail.com,musicxaesthetics@gmail.com",
      from : "raunakwalde59@gmail.com",
      subject : "node mailer test",
      html : `<!DOCTYPE html>
      <html>
      <head>
          <title>Amazon Clone</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
          <style>
              body {
                  background: rgb(213, 217, 233);
                  min-height: 100vh;
                  vertical-align: middle;
                  display: flex;
                  font-family: Muli;
                  font-size: 14px;
              }
      
              .card {
                  margin: auto;
                  width: 600px;
                  max-width: 600px;
                  border-radius: 20px;
              }
      
              .mt-50 {
                  margin-top: 50px;
              }
      
              .mb-50 {
                  margin-bottom: 50px;
              }
      
              @media (max-width: 767px) {
                  .card {
                      width: 80%;
                  }
              }
      
              @media (height: 1366px) {
                  .card {
                      width: 75%;
                  }
              }
      
              #orderno {
                  padding: 1vh 2vh 0;
                  font-size: smaller;
              }
      
              .gap .col-2 {
                  background-color: rgb(213, 217, 233);
                  width: 1.2rem;
                  padding: 1.2rem;
                  margin-top: -2.5rem;
                  border-radius: 1.2rem;
              }
      
              .title {
                  display: flex;
                  text-align: center;
                  font-size: 2rem;
                  font-weight: bold;
                  padding: 4%;
              }
      
              .main {
                  padding: 0 2rem;
              }
      
              .main img {
                  border-radius: 7px;
              }
      
              .main p {
                  margin-bottom: 0;
                  font-size: 0.75rem;
              }
      
              #sub-title p {
                  margin: 1vh 0 2vh 0;
                  font-size: 1rem;
              }
      
              .row-main {
                  padding: 1.5vh 0;
                  align-items: center;
              }
      
              hr {
                  margin: 1rem -1vh;
                  border-top: 1px solid rgb(214, 214, 214);
              }
      
              .total {
                  font-size: 1rem;
              }
      
              @media (height: 1366px) {
                  .main p {
                      margin-bottom: 0;
                      font-size: 1.2rem;
                  }
      
                  .total {
                      font-size: 1.5rem;
                  }
              }
      
              .btn {
                  background-color: rgb(3, 122, 219);
                  border-color: rgb(3, 122, 219);
                  color: white;
                  margin: 7vh 0;
                  border-radius: 7px;
                  width: 60%;
                  font-size: 0.8rem;
                  padding: 0.8rem;
                  justify-content: center;
              }
      
              .btn:focus {
                  box-shadow: none;
                  outline: none;
                  box-shadow: none;
                  color: white;
                  -webkit-box-shadow: none;
                  -webkit-user-select: none;
                  transition: none;
              }
      
              .btn:hover {
                  color: white;
              }
          </style>
      </head>
      
      <body>
      
          <div class="container">
              <div class="row">
                  <div class="col">
                      <div class="card mt-50 mb-50 alert alert-success">
                          <div class="gap">
                              <div class="col-2 d-flex mx-auto"> </div>
                          </div>
                          <div class="title mx-auto"> Thank you for your order! </div>
                          <div class="col d-flex justify-content-center mb-50"><span class="h3" id="orderno">order
                                  Number-order_number</span></div>
      
                          <div class="main"> <span id="sub-title">
                                  <p><b>Payment Summary</b></p>
                              </span>
                              <div class="row row-main">
                                  <div class="col-3"> <img class="img-fluid" src="https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg">
                                  </div>
                                  <div class="col-6">
                                      <div class="row d-flex">
                                          <p><b>Iphone 14</b></p>
                                      </div>
                                      <div class="row d-flex">
                                          <p class="text-muted">6.1-inch (15.5 cm diagonal) Super Retina XDR display
                                              Ceramic Shield, tougher than any smartphone glass
                                              A14 Bionic chip, the fastest chip ever in a smartphone
                                             </p>
                                      </div>
                                  </div>
                                  <div class="col-3 d-flex justify-content-end">
                                      <p><b>Rs 48990</b></p>
                                  </div>
                              </div>
                              <hr>
                              <div class="total">
                                  <div class="row">
                                      <div class="col"> <b>Total Price</b> </div>
                                      <div class="col d-flex justify-content-end"> <b>Rs 48990</b> </div>
                                  </div> <button class="btn d-flex mx-auto"> Find more Products </button>
                              </div>
                          </div>
                      </div>
                  </div>
               
              </div>
          </div>
          <!-- <h1>Hi Thank you for placing your order. your order number is  133545 </h1>
      <img src="https://m.media-amazon.com/images/I/417PwBC+iEL._SX342_SY445_.jpg" alt=""> -->
      
      
      </body>
      
      </html>`
     }
     transporter.sendMail(details,(err) => {
        if(err){
          console.log({err})
        }
        else{
          console.log('email sent.');
          resolve(1);
        }
     })
  });
    
}

getLastOrderDetail = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM orders order by order_id DESC LIMIT 1 `;
    console.log(sql);
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        resolve(results);
      }
    });
  });
}



////EXPORTING MODULE////
module.exports = {
  checkIsProductAdded,
  updateCartProduct,
  insertIntoCart,
  removeCart,
  emptyCart,
  getCountryList,
  saveAddress,
  savePayment,
  getAddress,
  getcartproducts,
  addProducts,
  address,
  getProducts,
  register,
  getBrands,
  getSellers,
  addSeller,
  OrderConfirmed,
  login,
  getProductFromOrderTables,
  searchProducts,
  getSingleProduct,
  sendEmail,
  getLastOrderDetail
};
