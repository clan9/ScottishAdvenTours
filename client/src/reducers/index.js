import { combineReducers } from "redux";
import toursReducer from "./tours";
import eventsReducer from "./events";
import authReducer from "./auth";
import paymentsReducer from "./payments";
import reviewsReducer from "./reviews";

export default combineReducers({
  tourData: toursReducer,
  eventData: eventsReducer,
  auth: authReducer,
  payment: paymentsReducer,
  reviews: reviewsReducer
});
