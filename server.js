const express = require("express");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

const JobRoutes = require("./routes/JobRoutes");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to DB"))
  .catch((err) => console.log(err));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({extended:true}));
  app.use("/api/jobs", JobRoutes);


app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
