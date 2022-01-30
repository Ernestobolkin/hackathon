const Holiday = require("../models/holidaySchema");

const addHoliday = async (req, res) => {
  try {
    const { region, dates } = req.body;
    const data = {
      region,
      dates,
    };
    const HolidayData = await Holiday.create(data);
    res.status(200).send({ HolidayData });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getHolidays = async (req, res) => {
  try {
    const { region, dates } = req.body;
    const data = {
      region,
      dates,
    };
    const HolidayData = await Holiday.create(data);
    res.status(200).send({ HolidayData });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addHoliday, getHolidays };
