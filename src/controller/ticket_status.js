const modelTicketStatus = require("../model/ticket_status");
const { response } = require("../middlewares/common");

const ticketStatusController = {
  getTicketStatus: async (req, res) => {
    try {
      const result = await modelTicketStatus.selectTicketStatus(req.body);
      return response(res, 200, true, result, "Get ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Get ticket failed");
    }
  },
  insert: async (req, res, next) => {
    try {
      const result = await modelTicketStatus.insertTicketSTatus(req.body);
      return response(res, 200, true, result, "Insert ticket success");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Insert ticket failed");
    }
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
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
  delete: (req, res, next) => {
    modelTicketStatus
      .dropTicketStatus(req.params.id)
      .then((result) => response(res, 200, true, result.rows, "Delete ticket success"))
      .catch((err) => response(res, 404, false, err.routine, "Delete ticket fail"));
  },
};
exports.ticketStatusController = ticketStatusController;
