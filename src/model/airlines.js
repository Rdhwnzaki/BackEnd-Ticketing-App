const Pool = require("../config/db");

const updateLogoAirlines = (id, data) => {
  const { photo } = data;
  return Pool.query(`UPDATE airlines SET photo='${photo}' WHERE id='${id}'`);
};

module.exports = {
  updateLogoAirlines,
};
