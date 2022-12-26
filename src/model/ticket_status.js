const Pool = require("../config/db");

const selectTicketStatus = () => Pool.query("SELECT * FROM ticket_status");

const insertTicketSTatus = (data) => {
  const { info, detail } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO ticket_status(info,detail)VALUES('0','Waiting for payment')`,
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
const editTicketStatus = (id) => {
  return Pool.query(
    `UPDATE ticket_status SET info = '1', detail = 'Eticket issued' WHERE id='${id}'`
  );
};
const dropTicketStatus = (id) =>
  Pool.query(`DELETE FROM ticket_status WHERE id='${id}'`);

module.exports = {selectTicketStatus,insertTicketSTatus,editTicketStatus,dropTicketStatus};
