const modelPayment = require("../model/payment_info");
const { response } = require("../middlewares/common");

const paymentController = {
  insert: async (req, res, next) => {
    try {
      const result = await modelPayment.createPayment(req.body);
      return response(res, 200, true, result, "Success");
    } catch (err) {
      console.log(err);
      return response(res, 400, false, err, "Error");
    }
  },
};

exports.paymentController = paymentController;
