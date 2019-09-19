import axios from "axios";
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../actions/types";
import { setAuthToken } from "../utils/setAuthToken";

// Load a user
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/user");
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register a new user
export const registerUser = (
  { name, email, password },
  history,
  destination
) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", {
      name,
      email,
      password
    });
    // res.data is { token: tokenForUser(user) }
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(loadUser());
    history.push(destination);
  } catch (error) {
    console.log("register fail action error: ", error.response.data.msg);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });

    setInterval(() => {
      dispatch({ type: REGISTER_FAIL, payload: "" });
    }, 6500);
  }
};

// Sign in existing user
export const loginUser = (
  { email, password },
  history,
  destination
) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signin", { email, password });
    // res.data is { token: tokenForUser(user) }
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    dispatch(loadUser());
    history.push(destination);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: "Invalid credentials" });

    setTimeout(() => {
      dispatch({ type: LOGIN_FAIL, payload: "" });
    }, 6500);
  }
};

// Logout user
export const logout = () => {
  return { type: LOGOUT };
};
