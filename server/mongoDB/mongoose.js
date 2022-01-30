const { connect } = require("mongoose");
require("dotenv").config();
console.log(process.env.PAS);
module.exports = connect(
  `mongodb+srv://elzo:${process.env.PAS}@ertodatabase.ilvau.mongodb.net/crud-template?retryWrites=true&w=majority`,
  () => {
    console.log("mongoDB connected");
  },
  (e) => console.error(e)
);