const modelAirlines = require("../model/airlines");
const { response } = require("../middlewares/common");

const airlinesController = {
  updateLogo: async (req, res) => {
    try {
      const id = req.params.id;
      // console.log("id", id);
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
  insert: async (req, res, next) => {
    try {
      const {
        photo: [photo],
      } = req.files;
      req.body.photo = photo.path;
      const result = await modelAirlines.createAirlines(req.body);
      return response(res, 200, true, result, "Success insert airlines data");
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "insert airlines data failed");
    }
  },
  delete: (req, res, next) => {
    modelAirlines
      .deletAirlines(req.params.id)
      .then((result) =>
        response(res, 200, true, result.rows, "delete data success")
      )
      .catch((err) =>
        response(res, 404, false, err.routine, "delete data fail")
      );
  },
  getSearch: async (req, res, next) => {
    const search = req.query.search || "";
    console.log(req.query);
    modelAirlines
      .getAirlines(search)
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, err.routine, "get data fail"));
  },
  update: async (req, res, next) => {
    try {
      const id = req.params.id;
      const { name, phone } = req.body;
      const photo = "images";
      // const image = await cloudinary.uploader.upload(photo.path, {
      //   folder: "ticketing",
      // });
      const data = { name, phone, photo };
      console.log(req.body);

      // req.body.photo = photo.path;
      const result = await modelAirlines.updateAirlines(id, data);
      return response(
        res,
        200,
        true,
        result.command,
        "Success update airlines data"
      );
    } catch (error) {
      console.log(error);
      return response(res, 400, false, error, "Update airlines data failed");
    }
  },
  getAirlines: async (req, res, next) => {
    modelAirlines
      .getAllairlines()
      .then((result) =>
        response(res, 200, true, result.rows, "get data success")
      )
      .catch((err) => response(res, 404, false, err.routine, "get data fail"));
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
