const modelTicket = require("../model/ticket");
const { response } = require("../middlewares/common");

const ticketController = {
  getTicket: (req, res) => {
    modelTicket
      .selectTicket()
      .then((result) =>
        response(res, 200, true, result.rows, "Get ticket success")
      )
      .catch((err) => response(res, 404, false, err, "Get ticket failed"));
  },
  getTicketJoin: async (req, res) => {
    try {
      const id = req.payload.id;
      console.log(id);
      const result = await modelTicket.selectTicketJoin(id);
      response(res, 200, true, result.rows, "Success Get Ticket By Token");
    } catch (error) {
      response(res, 400, false, error, "Get Ticket By Token Fail");
    }
  },
  postTicket: async (req, res, next) => {
    try {
      const result = await modelTicket.insertTicket(req.body);
      return response(res, 200, true, result, "Insert ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Insert ticket failed");
    }
  },
  updateTicket: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { user_id, detail_user, total_ticket, total_price, status, uuid } =
        req.body;
      const data = {
        user_id,
        detail_user,
        total_ticket,
        total_price,
        status,
        uuid,
      };
      console.log(id);
      const result = await modelTicket.editTicket(id, data);
      return response(res, 200, true, result.command, "Update ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Update ticket fail");
    }
  },
  deleteTicket: (req, res, next) => {
    modelTicket
      .dropTicket(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "Delete ticket success")
      )
      .catch((err) =>
        response(res, 404, false, err.routine, "Delete ticket fail")
      );
  },
};
exports.ticketController = ticketController;
