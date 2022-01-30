const axios = require("axios");

const createNewData = (data) => {
  try {
    let config = {
      method: "post",
      url: "http://localhost:8080/add/holiday",
      data,
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.log(err);
  }
};
module.exports = createNewData;
