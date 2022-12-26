const Pool = require("../config/db");

const selectTicket = () => Pool.query("SELECT * FROM ticket");

const selectTicketJoin = () =>
  Pool.query(
    `SELECT ticket.*, ticket_status.info, ticket_status.detail, stock_ticket.origin, stock_ticket.destination FROM ticket INNER JOIN ticket_status ON ticket.status=ticket_status.info INNER JOIN stock_ticket ON ticket.stock_id=stock_ticket.id;`
  );

const getAllTicket = () => {
  return Pool.query(`SELECT * FROM ticket`)
}

const insertTicket = (data) => {
  const { user_id, detail_user, total_ticket, total_price, status, uuid, insurance, custommer_name, nationality, grand_total } =
    data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO ticket(user_id,detail_user,total_ticket,total_price,status,uuid,insurance,custommer_name,nationality,grand_total)VALUES('${user_id}','${detail_user}',1,'${total_price}',${status},'${uuid}','0','${custommer_name}','${nationality}','0')`,
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
  const { user_id, detail_user, total_ticket, total_price, status, uuid, insurance, custommer_name, nationality, grand_total  } =
    data;
  return Pool.query(
    `UPDATE ticket SET user_id = '${user_id}', detail_user = '${detail_user}', total_ticket = ${total_ticket}, total_price = '${total_price}', status = ${status}, uuid = '${uuid}', insurance = '${insurance}', custommer_name = '${custommer_name}', nationality = '${nationality}', grand_total = '${grand_total}' WHERE id='${id}'`
  );
};
const dropTicket = (id) => Pool.query(`DELETE FROM ticket WHERE id='${id}'`);

module.exports = {
  selectTicket,
  insertTicket,
  editTicket,
  dropTicket,
  selectTicketJoin,
  getAllTicket
};
