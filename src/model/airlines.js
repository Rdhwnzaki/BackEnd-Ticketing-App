const Pool = require("../config/db");

const updateLogoAirlines = (id, data) => {
  const { name, photo, phone } = data;
  return Pool.query(
    `UPDATE airlines SET name='${name}',photo='${photo}',phone='${phone}' WHERE id='${id}'`
  );
};
const createAirlines = (data) => {
  const { name, photo, phone } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO airlines(name,photo,phone) VALUES('${name}','${photo}',${phone})`,
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
const getAirlines = (search) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM airlines WHERE name ILIKE '%${search}%'`,
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
const deletAirlines = (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM airlines WHERE id=${id}`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};
const updateAirlines = (id, data) => {
  const { name, phone, photo } = data;
  return Pool.query(
    `UPDATE airlines SET name = '${name}', phone = '${phone}', photo = '${photo}' WHERE id='${id}'`
  );
};
const getAllairlines = () => {
  return new Promise((resolve, reject) => {
    Pool.query(`SELECT * FROM airlines`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};
const selectAirlinesById = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(`select * from airlines where id = '${id}' `, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
module.exports = {
  updateLogoAirlines,
  createAirlines,
  getAirlines,
  deletAirlines,
  updateAirlines,
  getAllairlines,
  selectAirlinesById,
};
