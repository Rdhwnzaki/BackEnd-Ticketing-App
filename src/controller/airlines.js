const modelAirlines = require("../model/airlines");
const { response } = require("../middlewares/common");

const airlinesController = {
  updateLogo: async (req, res) => {
    try {
      const id = req.params.id;
      console.log("id", id);
      const {
        photo: [photo],
      } = req.files;
      req.body.photo = photo.path;
      await modelAirlines.updateLogoAirlines(id, req.body);
      return response(res, 200, true, req.body, "Update Photo Success");
    } catch (err) {
      return response(res, 404, false, err, "Update Photo Fail");
    }
  },
  getDetailAirlines: (req, res) => {
    modelAirlines
      .selectAirlinesById(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail airlines success")
      )
      .catch((err) =>
        response(res, 404, false, err, "Get detail airlines failed")
      );
  },
};
exports.airlinesController = airlinesController;
