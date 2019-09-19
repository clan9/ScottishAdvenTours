import axios from "axios";
import { loadUser } from "./auth";
import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "./types";

export const makePayment = (id, tourInfo, history) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = { id, ...tourInfo };

  try {
    const res = await axios.post("/api/payments", body, config);

    // Currently, res.data = 'status: succeeded'
    dispatch({ type: PAYMENT_SUCCESS, payload: res.data });
    dispatch(loadUser());
    history.push("/thankyou");
  } catch (error) {
    console.log("PAYMENTS ERROR:", error);

    dispatch({
      type: PAYMENT_FAIL,
      payload: "my failed payment error from action creator"
    });
  }
};
