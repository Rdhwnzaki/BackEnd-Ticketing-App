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

module.exports = {createAirlines,getAirlines}