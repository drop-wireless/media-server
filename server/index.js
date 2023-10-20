const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  json2xls = require("json2xls");

require("express-async-errors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("downloads"));
app.use(json2xls.middleware);
app.use(express.static('uploads'));
// app.use('/placepod_status',express.static('public'));
app.use("/", require("./routes/"));
app.use("/user", require("./routes/account"));
app.use("/sensor", require("./routes/sensor"));
app.use("/upload", require("./routes/upload"));
app.use("/payment", require("./routes/payment"));
app.use("/reservation", require("./routes/reservation"));
app.use("/credits", require("./routes/credits"));

app.all("*", (req, res, next) => {
  //If none of the paths matches the req route.
  return res.status(404).send("NOPATHEXISTS").end();
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json(err);
  next(err);
});
module.exports = app;
