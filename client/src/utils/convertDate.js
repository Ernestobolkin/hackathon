const dateMap = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
// Math.floor(Math.random()*16777215).toString(16)+"#";
export const convertAllDates = (arr) => {
  const newArr = [];
  arr.forEach((region) => {
    const newObj = region;
    newObj.dates = region.dates.map((date, i) => {
      let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      return convertDate(date, color, i);
    });
    newArr.push(newObj);
  });
  return newArr;
};

const convertDate = (holiday, color, i) => {
  const newObj = {};
  const date = holiday.date;
  let oldDate = date.split(" ");
  const month = oldDate[0];
  const monthNumber = dateMap[month];
  const day = oldDate[1];
  const newDate = `2022-${monthNumber}-${day}`;
  newObj.to = newDate;
  newObj.from = newDate;
  newObj.title = holiday.name;
  newObj.id = holiday._id;
  newObj.color = color;
  return newObj;
};
