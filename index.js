//import library
const express = require("express");
var bodyParser = require('body-parser')
const morgan = require("morgan")
require("dotenv").config();




//file local
const mainRouter = require('./src/routes/index')
const airports = require('./src/routes/airports')
const ticketStatus = require('./src/routes/ticket.status')




//setup
const app = express();
const port = 3000;
/* const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}; */
//app.use(cors(corsOptions));

/* app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
 */
app.use(bodyParser.json())
app.use('/airports', airports)
app.use('/ticketStatus', ticketStatus)


app.use(morgan("dev"));
app.use('/', mainRouter)



/* app.all("*",(req,res,next)=>{
  response(res,404,false,null,"404 Not Found");
}) */

/* app.get("/",(req,res,next)=>{
  res.status(200).json({status:"success",statusCode:200})
})
 */
app.listen (port, () =>{
  console.log(`Example app Listening on port ${port}`)
})









