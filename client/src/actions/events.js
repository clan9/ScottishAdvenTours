import axios from "axios";
import { GET_EVENTS } from "./types";

export const getEvents = (startDate, endDate) => async dispatch => {
  try {
    const res = await axios.post("/api/events", { startDate, endDate });
    dispatch({ type: GET_EVENTS, payload: res.data });
  } catch (error) {
    console.log("Error from getEvents action: ", error);
  }
};
