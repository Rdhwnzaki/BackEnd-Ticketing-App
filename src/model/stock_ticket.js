const Pool = require("../config/db");
const createTicket = (data) => {
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
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO stock_ticket(origin,departure,price,terminal,airlines_id,destination,arrived,stock,code,gate,type) VALUES('${origin}','${departure}',${price},'${terminal}','${airlines_id}','${destination}','${arrived}',${stock},'${code}','${gate}','${type}')`,
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

// const getTicketapagitu = () => {
//   return new Promise((resolve, reject) => {
//     Pool.query(
//       `SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id;`,
//       (err, result) => {
//         if (!err) {
//           resolve(result);
//         } else {
//           reject(err);
//         }
//       }
//     );
//   });
// };

const getTicketapagitu = (search, limit, page) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket
      INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id 
      WHERE airlines.name
      ILIKE '%${search}%'
      LIMIT ${limit}
      OFFSET ${(page - 1) * limit}`,
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

const getById = (id) => {
  return Pool.query(`SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket
  INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id 
  WHERE stock_ticket.id=${id}`)
}

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
      `UPDATE stock_ticket SET airlines_id=${airlines_id}, origin='${origin}', destination='${destination}', departure='${departure}', arrived='${arrived}', stock=${stock}, price=${price}, code='${code}', terminal='${terminal}', gate='${gate}',type='${type}' WHERE id=${id}`,
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

// const getTicketpagination = (search, limit, page) => {
//   return new Promise((resolve, reject) => {
//     Pool.query(
//       `SELECT stock_ticket.*, airlines.name AS airlines, airlines.photo AS photo FROM stock_ticket
//       INNER JOIN airlines ON stock_ticket.airlines_id = airlines.id
//       WHERE airlines.name
//       ILIKE '%${search}%'
//       LIMIT ${limit}
//       OFFSET ${(page - 1) * limit}`,
//       (err, result) => {
//         if (!err) {
//           resolve(result);
//         } else {
//           reject(err);
//         }
//       }
//     );
//   });
// };

module.exports = {
  createTicket,
  getTicketapagitu,
  delTicket,
  putTicket,
  getById
};

// INSERT INTO stock_ticket(origin,departure,"type",price,terminal,airlines_id,destination,arrived,stock,code,gate) VALUES('jakarta','12.00','economy',500000,'2E','1','surabaya','14.00',100,'jt-123','20');
