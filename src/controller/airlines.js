const modeAirlines = require("../model/airlines")
const { response }= require("../middlewares/common")
const airlinesController =  {
    insert: async (req,res,next) => {
        try{
            const {
                photo: [photo],
              } = req.files;
              req.body.photo = photo.path;
              const result = await modeAirlines.createAirlines(req.body);
          return response(res, 200, true, result, "Success insert airlines data");
        } catch (error) {
          console.log(error);
          return response(res, 400, false, error, "insert airlines data failed");
        }
        }
    }

    exports.airlinesController = airlinesController