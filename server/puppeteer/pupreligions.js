const puppeteer = require("puppeteer");
const createNewData = require("./postingData");
const religions = ["islam", "christian"];

const religionFunc = async () => {
  await religions.forEach(async (religion) => {
    const religionData = { region: `${religion}`, dates: [] };
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.calendarlabs.com/holidays/${religion}/2022`);
    await page.waitForSelector(".hlist_tab");
    const grabTable = await page.evaluate(async () => {
      const table = await [
        ...document.querySelectorAll(".hlist_tab tbody tr"),
      ].map((x) => [...x.children].map((y) => y.textContent));
      return table;
    });
    const keys = ["day", "date", "name"];
    grabTable.forEach((row, i) => {
      let holidayObj = {};

      row.forEach((val, i) => {
        let value = val;
        if (keys[i] === "date") {
          value = val.slice(0, 6);
        }
        holidayObj[keys[i]] = value;
      });
      religionData.dates.push(holidayObj);
    });
    //post religionData to db
    createNewData(religionData);
    // data.forEach((rel) => console.log(rel.dates));
    await browser.close();
  });
};

const israelFunc = async () => {
  const israel = { region: "israel", dates: [] };
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.timeanddate.com/holidays/israel/");
  await page.waitForSelector("#holidays-table");
  const grabTable = await page.evaluate(async () => {
    const table = await [...document.querySelectorAll("tbody .showrow")].map(
      (x) => [...x.children].map((y) => y.textContent)
    );
    return table;
  });
  const keys = ["date", "day", "name", "type"];
  grabTable.forEach((row, i) => {
    let holidayObj = {};

    row.forEach((val, i) => {
      holidayObj[keys[i]] = val;
    });
    israel.dates.push(holidayObj);
  });
  createNewData(israel);
  //post israel to db
  await browser.close();
};

const getData = () => {
  let date = new Date().toString();
  if (date.includes("Jan 1")) {
    religionFunc();
    israelFunc();
  }
};

module.exports = getData;
