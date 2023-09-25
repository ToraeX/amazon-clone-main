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
}
emptyCart = () => {
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
}

getCountryList = () => {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM country_master;`;
    connection.query(sql, (error, results, fields) => {
      if (error) {
        throw error;
        resolve(false);
      } else {
        console.log({results});
        resolve(results);
      }
    });
  });
}

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
}
module.exports = {
  checkIsProductAdded,
  updateCartProduct,
  insertIntoCart,
  removeCart,
  emptyCart,
  getCountryList,
  saveAddress
};
