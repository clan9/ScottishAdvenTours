import { PAYMENT_FAIL, PAYMENT_SUCCESS } from "../actions/types";

const initialState = { paymentComplete: false };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PAYMENT_SUCCESS:
      return {
        ...state,
        payment: payload.status,
        paymentComplete: true
      };
    case PAYMENT_FAIL:
      return {
        ...state,
        payment: payload,
        paymentComplete: false
      };
    default:
      return state;
  }
};
