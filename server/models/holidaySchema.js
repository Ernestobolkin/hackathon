const { Schema, model } = require("mongoose");

const HolidaySchema = new Schema({
  region: {
    type: String,
    unique: true,
  },
  dates: [
    {
      date: {
        type: String,
      },
      day: {
        type: String,
      },
      name: {
        type: String,
      },
      type: {
        type: String,
      },
    },
  ],
});

const Holiday = model("Holidays", HolidaySchema);

module.exports = Holiday;
