const ticketModel = require("./../model/ticket")
const { response }= require("../middlewares/common")
const {putTicket}=require("../model/ticket")
// const { get } = require("../routes")

const ticketController = {
 insert : async (req,res,next) => {
    try{
        const {airlines_id,origin,destination,departure,arrived,stock,price,code,terminal,gate,type}=req.body
        const data = {airlines_id,origin,destination,departure,arrived,stock,price,code,terminal,gate,type}
          const {rows} = await ticketModel.createTicket(data);
      return response(res, 200, true, rows, "Success insert ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "insert ticket stock failed");
    }
    },
getTicket : async (req,res,next) => {
    try{
      
        const {rows} = await ticketModel.getTicketapagitu()
        return response(res, 200, true, rows, "Success get ticket stock data");
    } catch (error) {
        console.log(error);
        return response(res, 400, false, error, "insert ticket stock failed");
      }
},
delTicket : async (req,res,next) => {
    try{
        const {rows} = await ticketModel.delTicket(req.params.id)
        return response(res, 200, true, rows, "Success delete ticket stock data");
    } catch (error) {
        console.log(error);
        return response(res, 400, false, error, "delete ticket stock failed");
      }
},
editTicket : async (req,res,next) => {
    try{
        const id = req.params.id
        const {airlines_id,origin,destination,departure,arrived,stock,price,code,terminal,gate,type}=req.body
        const data = {airlines_id,origin,destination,departure,arrived,stock,price,code,terminal,gate,type}
          const {rows} = await ticketModel.putTicket(id,data);
      return response(res, 200, true, rows, "Success delete ticket stock data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "delete ticket stock failed");
    }
    },
    getTicketsearch : async (req,res,next) => {
      try{
        const page = req.query.page||1;
        const limit = req.query.limit||2;
        const search = req.query.search||'';
        console.log(limit)
          const {rows} = await ticketModel.getTicketpagination(search,page,limit)
          return response(res, 200, true, rows, "Success get ticket stock data");
      } catch (error) {
          console.log(error);
          return response(res, 400, false, error, "get ticket stock failed");
      }
    //   const page = req.query.page || 1
    //     const limit = req.query.limit || 1
    //     const search = req.query.search || ''
    //     console.log(req.query)
    //     ticketModel.getTicketpagination(page,limit,search)
    //     .then({rows} => response(res, 200, true, rows,"get data success"))
    //     .catch((err) => response(res, 404, false, err.routine,"get data fail"));
    // }
}}

exports.ticketController = ticketController