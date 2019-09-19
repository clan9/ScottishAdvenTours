import React from "react";

const SummaryError = ({ onClick }) => {
  return (
    <div className="login">
      <div className="u-center-text u-margin-bottom-sm">
        <h3 className="heading-tertiary">Oops!!</h3>
      </div>
      <div className="u-center-text u-margin-bottom-sm">
        <p>Looks like you forgot to choose the dates for your tour</p>
      </div>
      <div className="login__links ">
        <button onClick={onClick} className="login__links__button">
          Back
        </button>
      </div>
    </div>
  );
};

export default SummaryError;
