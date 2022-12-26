const Pool = require("../config/db");
const selectTicket = () => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id;`,
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

const delTicket = (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM stock_ticket WHERE id='${id}'`, (err, result) => {
      if (!err) {
        resolve(result);
      } else {
        reject(err);
      }
    });
  });
};
const putTicket = (id, data) => {
  return new Promise((resolve, reject) => {
    const {
      airlines_id,
      origin,
      destination,
      departure,
      arrived,
      stock,
      price,
      code,
      terminal,
      gate,
      type,
    } = data;
    Pool.query(
      `UPDATE stock_ticket SET airlines_id='${airlines_id}', origin='${origin}', destination='${destination}', departure='${departure}', arrived='${arrived}', stock=${stock}, price=${price}, code='${code}', terminal='${terminal}', gate='${gate}',type='${type}' WHERE id=${id}`,
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

const getTicketpagination = (search, limit, page) => {
  return Pool.query(
    `SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id WHERE airlines.name ilike '%${search}%' limit ${limit} offset ${
      (page - 1) * limit
    }`
  );
};

module.exports = {
  selectTicket,
  getTicketpagination,
  putTicket,
  delTicket,
};
