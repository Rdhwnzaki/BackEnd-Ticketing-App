const ticketModel = require("../model/stock_ticket");
const { response } = require("../middlewares/common");
const { putTicket } = require("../model/stock_ticket");
// const { get } = require("../routes")

const stockTicketController = {
  insert: async (req, res, next) => {
    try {
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
      } = req.body;
      const data = {
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
      };
      const { rows } = await ticketModel.createTicket(data);
      return response(res, 200, true, rows, "Success insert ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "insert ticket stock failed");
    }
  },
  getTicket: async (req, res, next) => {
    const search = req.query.search || "";
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    ticketModel
      .getTicketapagitu(search, limit, page)
      .then((result) => {
        response(res, 200, true, result.rows, "Success get ticket stock data");
      })
      .catch((err) => {
        response(res, 400, false, err, "Get ticket stock failed");
      });
  },
  getById: async (req, res) => {
    try {
      const id = req.params.id;
      const { rows } = await ticketModel.getById(id);
      response(res, 200, true, rows, "Success get ticket stock data");
    } catch (error) {
      console.log(error);
    }
  },
  // getTicket: async (req, res, next) => {
  //   const search = req.query.search || "";
  //   const limit = req.query.limit || 1;
  //   const page = req.query.page || 1;
  //   ticketModel
  //     .getTicketapagitu(search, limit, page)
  //     .then((result) => {
  //       res.status(200).send({ result: result.rows });
  //     })
  //     .catch((err) => {
  //       res.status(404).send({ message: "Can't get data", err: err.message });
  //     });
  // },

  delTicket: async (req, res, next) => {
    try {
      const { rows } = await ticketModel.delTicket(req.params.id);
      return response(res, 200, true, rows, "Success delete ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "delete ticket stock failed");
    }
  },
  editTicket: async (req, res, next) => {
    try {
      const id = req.params.id;
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
      } = req.body;
      const data = {
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
      };
      const { rows } = await ticketModel.putTicket(id, data);
      return response(res, 200, true, rows, "Success edit ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "edit data ticket stock failed");
    }
  },
  editTicketStock: async (req, res, next) => {
    try {
      const { id, stock } = req.body;
      const data = {
        id,
        stock,
      };
      console.log(data);
      const { rows } = await ticketModel.putTicketStock(data);
      return response(res, 200, true, rows, "Success edit ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "edit data ticket stock failed");
    }
  },
  // getTicketsearch: async (req, res, next) => {
  //   // try {
  //   //   const page = req.query.page || 1;
  //   //   const limit = req.query.limit || 2;
  //   //   const search = req.query.search || "";
  //   //   console.log(limit);
  //   //   const { rows } = await ticketModel.getTicketpagination(
  //   //     search,
  //   //     page,
  //   //     limit
  //   //   );
  //   //   return response(res, 200, true, rows, "Success get ticket stock data");
  //   // } catch (error) {
  //   //   console.log(error);
  //   //   return response(res, 400, false, error, "get ticket stock failed");
  //   // }
  //   const search = req.query.search || "";
  //   const limit = req.query.limit || 1;
  //   const page = req.query.page || 1;
  //   ticketModel
  //     .getTicketapagitu(search, limit, page)
  //     .then((result) => {
  //       response(res, 200, true, result.rows, "Success get ticket stock data");
  //     })
  //     .catch((err) => {
  //       response({ message: "Can't get data", err: err.message });
  //     });
  //   // }
  // },
};

exports.stockTicketController = stockTicketController;
