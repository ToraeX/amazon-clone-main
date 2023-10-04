const mysql = require("mysql");
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
    var sql = `SELECT * FROM orders WHERE session_id = '${obj.sessionId}' and user_id = '${obj.userId}' and address_id = '${obj.addressId}'`;       
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
      console.log('session_id',session_id);
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
    if(cartUpdate){
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
}

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
  getProductFromOrderTables
};
