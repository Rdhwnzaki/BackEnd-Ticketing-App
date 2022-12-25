const Pool = require("../config/db");

const selectTicket = () => Pool.query("SELECT * FROM ticket");

const selectTicketJoin = () =>
  Pool.query(
    `SELECT ticket.*,  ticket_status.info AS info, ticket_status.detail AS detail FROM ticket INNER JOIN ticket_status ON ticket.status = ticket_status.info`
  );

const insertTicket = (data) => {
  const { user_id, detail_user, total_ticket, total_price, status, uuid } =
    data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO ticket(user_id,detail_user,total_ticket,total_price,status,uuid)VALUES('${user_id}','${detail_user}',${total_ticket},'${total_price}',${status},'${uuid}')`,
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
const editTicket = (id, data) => {
  const { user_id, detail_user, total_ticket, total_price, status, uuid } =
    data;
  return Pool.query(
    `UPDATE ticket SET user_id = '${user_id}', detail_user = '${detail_user}', total_ticket = ${total_ticket}, total_price = '${total_price}', status = ${status}, uuid = '${uuid}' WHERE id='${id}'`
  );
};
const dropTicket = (id) => Pool.query(`DELETE FROM ticket WHERE id='${id}'`);

module.exports = {
  selectTicket,
  insertTicket,
  editTicket,
  dropTicket,
  selectTicketJoin,
};
