const Pool = require("./../config/db");
const createUsers = (data) => {
  const { id, fullname, password, email, status, otp } = data;
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
    );
  });
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
const updateUser = (id, data) => {
  const { fullname, phone, photo, city, address, postcode } = data;
  return Pool.query(
    `UPDATE users SET fullname = '${fullname}', phone = '${phone}', photo = '${photo}', city = '${city}' , address ='${address}' , postcode = '${postcode}' WHERE id = '${id}'`
  );
};

const getUserByToken = (id) => {
  return Pool.query(`SELECT * FROM users WHERE id = '${id}'`);
};

const updatePhoto = (id, data) => {
  const { photo } = data;
  return Pool.query(`UPDATE users SET photo='${photo}' WHERE id='${id}'`);
};

module.exports = {
  createUsers,
  findEmail,
  verification,
  updateUser,
  getUserByToken,
  updatePhoto,
};
