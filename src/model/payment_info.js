const Pool = require("../config/db");

const createPayment = (data) => {
  const { credit_name, credit_number, expired_date, cvv } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO payment_info (credit_name, credit_number, expired_date, cvv) VALUES ('${credit_name}', '${credit_number}', '${expired_date}', '${cvv}')`,
      (err, res) => {
        if (!err) {
          resolve(res);
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = {
  createPayment,
};
