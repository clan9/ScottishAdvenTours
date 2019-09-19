import { FETCH_TOURS, FETCH_TOUR, SELECT_TOUR_DATES } from "./types";

export const fetchTours = () => {
  return { type: FETCH_TOURS };
};

export const fetchTour = id => {
  return { type: FETCH_TOUR, payload: id };
};

export const selectTourDates = (id, startDate, endDate) => {
  return { type: SELECT_TOUR_DATES, payload: { id, startDate, endDate } };
};
