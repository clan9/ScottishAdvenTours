const axios = require("axios");
const keys = require("../config/keys");

exports.getEvents = async (req, res) => {
  const { startDate, endDate } = req.body;
  const API_KEY = keys.ticketMasterKey;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&locale=en-gb&marketId=207&startDateTime=${startDate}&endDatetime=${endDate}&sort=date,asc`;

  try {
    const response = await axios.get(url);
    res.json(response.data._embedded.events);
  } catch (error) {
    console.error("Controller error: ", error);
  }
};
