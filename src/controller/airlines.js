const modeAirlines = require("../model/airlines")
const cloudinary = require('../config/cloud')
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
        },
    // delete: async (req,res,next) => {
    //   try{
    //         const result = await modeAirlines.deletAirlines(req.param.id);
    //     return response(res, 200, true, result, "Success delete airlines data");
    //   } catch (error) {
    //     console.log(error);
    //     return response(res, 400, false, error, "delete airlines data failed");
    //   }
    //   },
      // getSearch: async (req,res,next) => {
      //   try{
      //         const rows = await modeAirlines.getAirlines(req.param.search);
      //     return response(res, 200, true, rows, "Success search airlines data");
      //   } catch (error) {
      //     console.log(error);
      //     return response(res, 400, false, error, "delete airlines data failed");
      //   }
      //   },
        delete: (req,res,next)=>{
          modeAirlines.deletAirlines(req.params.id)
          .then((result) => response(res, 200, true, result.rows,"delete data success"))
          .catch((err) => response(res, 404, false, err.routine,"delete data fail"));
      },
      getSearch: async (req,res,next) => {
        const search = req.query.search ||''
        console.log(req.query)
        modeAirlines.getAirlines(search)
        .then((result) => response(res, 200, true, result.rows,"get data success"))
        .catch((err) => response(res, 404, false, err.routine,"get data fail"));
        },
        update: async (req, res, next) => {
          // modeAirlines.updateAirlines(req.body,req.params.id)
          // .then(result=> res.send({status:200,message: `berhasil mengubah data`}))
          // .catch(err=> res.send({message:'error',err}))
          try {
            const id = req.params.id;
            const {name,phone} = req.body;
            const photo = req.files;
            const image = await cloudinary.uploader.upload(photo.path,{folder:"ticketing"})
            const data = {name,phone,photo:[image.secure_url]}
            console.log(data);

            // req.body.photo = photo.path;
            const result = await modeAirlines.updateAirlines(id, data);
            return response(res, 200, true, result.command, "Success update airlines data");
          } catch (error) {
            console.log(error);
            return response(res, 400, false, error, "Update airlines data failed");
          }
        },
        updateLogo: async(req, res) => {
          try {
            const id = req.params.id;
            console.log("id_user", id);
            const image = await cloudinary.uploader.upload(req.file.path, {
              folder: "ticketing",
            });
            req.body.photo = image.url;
            await modeAirlines.updateLogo(id, req.body);
            return response(res, 200, true, req.body, "Update Photo Success");
          } catch (err) {
            return response(res, 404, false, err, "Update Photo Fail");
          }
      
        },
        getAirlines: async (req,res,next) => {
          modeAirlines.getAllairlines()
          .then((result) => response(res, 200, true, result.rows,"get data success"))
          .catch((err) => response(res, 404, false, err.routine,"get data fail"));
          }

    }


    exports.airlinesController = airlinesController