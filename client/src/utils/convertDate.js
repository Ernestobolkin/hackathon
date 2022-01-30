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

const convertAllDates = (obj) => {
  const newObj = obj;
  newObj.dates = obj.dates.map((date) => {
    return convertDate(date);
  });
  return newObj;
};

const convertDate = (holiday) => {
  const newObj = holiday;
  const date = holiday.date;
  let oldDate = date.split(" ");
  const month = oldDate[0];
  const monthNumber = dateMap[month];
  const day = oldDate[1];
  const newDate = `2022-${day}-${monthNumber}`;
  newObj.date = newDate;
  console.log(newObj);
  return newObj;
};
