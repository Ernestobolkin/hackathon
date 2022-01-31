const Holiday = require("../models/holidaySchema");
const getWikiData = require("../puppeteer/wikiPuppet");

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
    const data = await Holiday.find({});
    res.status(200).send({ data });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getWiki = async (req, res) => {
  try {
    const { title } = req.body;
    console.log(title);
    const data = await getWikiData(title);
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { addHoliday, getHolidays, getWiki };
