import { FETCH_TOURS, FETCH_TOUR, SELECT_TOUR_DATES } from "../actions/types";

import tours from "../fixtures/tours";

const initialState = {
  tours,
  selectedTour: {},
  loading: true
};

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TOURS:
      return { tours, selectedTour: {}, loading: false };
    case FETCH_TOUR:
      return {
        ...state,
        selectedTour: state.tours.find(tour => tour.tourId === payload),
        loading: false
      };
    case SELECT_TOUR_DATES:
      const tour = state.tours.find(tour => tour.tourId === payload.id);
      return {
        ...state,
        selectedTour: {
          ...tour,
          startDate: payload.startDate,
          endDate: payload.endDate
        },
        loading: false
      };
    default:
      return state;
  }
};

export { toursReducer as default };
