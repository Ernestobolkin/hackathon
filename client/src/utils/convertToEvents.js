export const convertToEvents = (arr) => {
  const events = [];
  arr.forEach((region) =>
    region.dates.forEach((date) => {
      const newDate = date;
      // console.log(region.region, date);
      newDate.region = region.region;
      events.push(newDate);
    })
  );

  return events;
};
