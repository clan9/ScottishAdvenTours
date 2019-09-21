import React from "react";
import { withRouter } from "react-router-dom";

const Thankyou = ({ history }) => {
  const afterPayment = () => {
    setTimeout(() => {
      history.push("/tours");
    }, 4000);
  };

  return (
    <div className="u-container">
      <div className="thankyou">
        <h2 className="heading-secondary">Thank you for your payment!</h2>
        <p className="thankyou__msg">You will be re-directed shortly...</p>
        {afterPayment()}
      </div>
    </div>
  );
};

export default withRouter(Thankyou);
