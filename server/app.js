const express = require("express");
const path = require("path");
const cors = require("cors");
require("./mongoDB/mongoose");
require("dotenv").config();
const { addHoliday, getHolidays } = require("./controllers/controller");
const getData =require("./puppeteer/pupreligions")
getData()
const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));

app.post("/add/holiday", addHoliday);

app.get("/get/holidays", getHolidays);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
