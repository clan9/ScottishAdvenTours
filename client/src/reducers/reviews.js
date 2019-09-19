import {
  FETCH_REVIEWS,
  FETCH_REVIEW,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  REVIEW_ERROR
} from "../actions/types";

const initialState = { reviews: [], review: {}, error: "", loading: true };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_REVIEWS:
      return { ...state, reviews: [...payload], loading: false };
    case ADD_REVIEW:
    case FETCH_REVIEW:
    case EDIT_REVIEW:
    case DELETE_REVIEW:
      return { ...state, review: { ...payload }, loading: false };
    case REVIEW_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
