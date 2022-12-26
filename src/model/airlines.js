const Pool = require("../config/db");

const updateLogoAirlines = (id, data) => {
  const { name, photo, phone } = data;
  return Pool.query(
    `UPDATE airlines SET name='${name}',photo='${photo}',phone='${phone}' WHERE id='${id}'`
  );
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
  selectAirlinesById,
};
