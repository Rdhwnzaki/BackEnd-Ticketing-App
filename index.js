const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const mainRouter = require("./src/routes/index");
const { response } = require("./src/middlewares/common");
const app = express();
const port = 3006;

app.use(cors());

app.use(bodyParser.json());

app.use(morgan("dev"));
app.use("/", mainRouter);
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.all("*", (req, res, next) => {
  response(res, 404, false, null, "404 Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
