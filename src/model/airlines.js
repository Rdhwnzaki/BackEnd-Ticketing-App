const Pool = require("./../config/db")
const createAirlines = (data) => {
    const {
        name,
        photo,
        phone
    } = data;
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
        )
    })
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
        )
    })
}

const deletAirlines = (id) =>{
  return new Promise((resolve, reject) => {
    Pool.query(
        `DELETE FROM airlines WHERE id=${id}`,
        (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          }
    )
})
}

const updateAirlines = (id, data) => {
  const { name, phone, photo } = data;
  return Pool.query(
  `UPDATE airlines SET name = '${name}', phone = '${phone}', WHERE id='${id}'`
  );
};

const updateLogo = ( id, data ) => {
  const {photo} = data;
  return Pool.query(
      `UPDATE users SET photo='${photo}' WHERE id='${id}'`,
    );
  };

const getAllairlines = () => {
  return new Promise((resolve, reject) => {
    Pool.query(
        `SELECT * FROM airlines`,
        (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(err);
            }
          }
    )
})
}

module.exports = {createAirlines,getAirlines,deletAirlines,updateAirlines,updateLogo,getAllairlines}