import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

const WrappedCheckout = () => {
  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default WrappedCheckout;
