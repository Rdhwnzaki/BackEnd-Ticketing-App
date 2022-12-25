const Pool = require("../config/db");

const updateLogoAirlines = (id, data) => {
  const { name, photo, phone } = data;
  return Pool.query(
    `UPDATE airlines SET name='${name}',photo='${photo}',phone='${phone}' WHERE id='${id}'`
  );
};

module.exports = {
  updateLogoAirlines,
};
