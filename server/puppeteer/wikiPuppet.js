const puppeteer = require("puppeteer");

const getSelector = async(page, selector) => await page.$(selector);
const getSelectors = async (page, selector) => await page.$$(selector);
const getAttrFromElements = async (elements, attr) =>{
  const newElements = await Promise.all(elements.map(async (element) =>{
    const value = await (await element.getProperty(attr)).jsonValue()
    return value
  }))
  return newElements
}

const getWikiData = async (title) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`https://en.wikipedia.org/wiki/${title}`);
  await page.waitForSelector("#bodyContent");

  const paragraphs = await getSelectors(page, "p");
  const newParagraphs = await getAttrFromElements(paragraphs, "innerText");
  const selectedParagraph = newParagraphs.find((p) => p.length > 10);
  await browser.close();
  return selectedParagraph
  
};
module.exports = getWikiData;

// You can use :nth-child like this:

// const value = await page.$eval('table tr td:nth-child(2)', el => { return el.innerHTML })
