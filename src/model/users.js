const Pool = require("./../config/db")
const createUsers = (data) => {
    const {
        id,
        fullname,
        password,
        email,
        status,
        otp
    } = data;
    return new Promise((resolve, reject) => {
        Pool.query(
            `INSERT INTO users(id,fullname,password,email,status,otp,role) VALUES('${id}','${fullname}','${password}','${email}','0',${otp},'customer')`,
            (err, result) => {
                if (!err) {
                  resolve(result);
                } else {
                  reject(err);
                }
              }
        )
    })
};

const findEmail = (email) => {
    return new Promise((resolve, reject) =>
      Pool.query(`SELECT * FROM users where email='${email}'`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      })
    );
  };

  const verification = (email) => {
    return new Promise((resolve, reject) =>
      Pool.query(
        `UPDATE users SET status='1' WHERE "email"='${email}'`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      )
    );
  };

module.exports = {createUsers,
                findEmail,
                verification};