const modelTicketStatus = require("../model/ticket_status");
const { response } = require("../middlewares/common");

const ticketStatusController = {
  getTicketStatus: (req, res) => {
    modelTicketStatus
      .selectTicketStatus()
      .then((result) =>
        response(res, 200, true, result.rows, "Get ticket success")
      )
      .catch((err) => response(res, 404, false, err, "Get ticket failed"));
  },
  postTicketStatus: async (req, res, next) => {
    try {
      const result = await modelTicketStatus.insertTicketSTatus(req.body);
      return response(res, 200, true, result, "Insert ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Insert ticket failed");
    }
  },
  putTicketStatus: async (req, res, next) => {
    try {
      const id = req.body;
      const { info, detail } = req.body;
      const data = {
        info,
        detail,
      };
      console.log(id);
      const result = await modelTicketStatus.editTicketStatus(id, data);
      return response(res, 200, true, result.command, "Update ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Update ticket fail");
    }
  },
  deleteTicketStatus: (req, res, next) => {
    modelTicketStatus
      .dropTicketStatus(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "Delete ticket success")
      )
      .catch((err) =>
        response(res, 404, false, err.routine, "Delete ticket fail")
      );
  },
};
exports.ticketStatusController = ticketStatusController;
