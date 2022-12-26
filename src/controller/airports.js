const Airports = require("./../model/airports");

const AirportsController = {
    insert:(req,res,next)=>{
        Airports.insertData(req.body)
        .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
        .catch((err) => res.send({ message: "error", err }));  
    },
    update:(req,res,next)=>{
        Airports.updateData(req.params.id, req.body)
        .then((result) => res.send({ status: 200, message: `berhasil ubah data`}))
        .catch((err) => res.send({ message: "error", err }));
    },
    delete:(req,res,next)=>{
        Airports.deleteData(req.params.id)
         .then((result) => res.send({ status: 200, message: `berhasil hapus data` }))
         .catch((err) => res.send({ message: "error", err }));
    },
    getAirports:(req,res,next)=>{
        Airports.selectData()
        .then((result) => res.send({ result: result.rows }))
        .catch((err) => res.send({ message: "error", err }));
    },
}

exports.AirportsController = AirportsController