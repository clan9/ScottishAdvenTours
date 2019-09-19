import axios from "axios";

import {
  FETCH_REVIEWS,
  FETCH_REVIEW,
  ADD_REVIEW,
  EDIT_REVIEW,
  DELETE_REVIEW,
  REVIEW_ERROR
} from "./types";

export const fetchAllReviews = () => async dispatch => {
  try {
    const res = await axios.get("/api/reviews");
    dispatch({ type: FETCH_REVIEWS, payload: res.data });
  } catch (error) {
    dispatch({ type: REVIEW_ERROR, payload: error.response.data.msg });
  }
};

export const fetchSingleReview = id => async dispatch => {
  try {
    const res = await axios.get(`/api/reviews/${id}`);
    dispatch({ type: FETCH_REVIEW, payload: res.data });
  } catch (error) {
    dispatch({ type: REVIEW_ERROR, payload: error.response.data.msg });
  }
};

export const addReview = (formData, history) => async dispatch => {
  try {
    const res = await axios.post("/api/reviews", formData);
    dispatch({ type: ADD_REVIEW, payload: res.data });
    history.push("/reviews");
  } catch (error) {
    dispatch({ type: REVIEW_ERROR, payload: error.response.data.msg });
    setTimeout(() => {
      dispatch({ type: REVIEW_ERROR, payload: "" });
    }, 6000);
  }
};

export const editReview = (formData, id) => async dispatch => {
  try {
    const res = await axios.patch(`/api/reviews/${id}`, formData);
    dispatch({ type: EDIT_REVIEW, payload: res.data });
  } catch (error) {
    dispatch({ type: REVIEW_ERROR, payload: error.response.data.msg });
  }
};

export const deleteReview = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/reviews/${id}`);
    dispatch({ type: DELETE_REVIEW, payload: res.data });
  } catch (error) {
    dispatch({ type: REVIEW_ERROR, payload: error.response.data.msg });
  }
};
