const modelTicket = require("../model/ticket");
const { response } = require("../middlewares/common");

const ticketController = {
  getAllTicket: async (req, res) => {
    try {
      const { rows } = await modelTicket.getAllTicket();
      response(res, 200, true, rows, "Get ticket success");
    } catch (error) {
      console.log(error);
    }
  },
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
      const {
        id,
        user_id,
        detail_user,
        total_price,
        uuid,
        stock_id,
        custommer_name,
        nationality,
      } = req.body;
      const data = {
        id,
        user_id,
        detail_user,
        total_price,
        uuid,
        stock_id,
        custommer_name,
        nationality,
      };
      console.log(data.id);
      const { rows } = await modelTicket.insertTicket(data);
      console.log(data);
      return response(res, 200, true, data, "Insert ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Insert ticket failed");
    }
  },
  updateTicket: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { status } = req.body;
      const data = {
        status,
      };
      console.log(data);
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
