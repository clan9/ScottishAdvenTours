import React from "react";

const LoaderPayment = props => {
  return (
    <div className="loader-payment-container">
      <p className="loader-payment-msg">{props.msg}</p>
      <div className="loader-payment"></div>
    </div>
  );
};

export default LoaderPayment;
