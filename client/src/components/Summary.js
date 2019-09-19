import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { registerUser, loginUser } from "../actions/auth";

const Summary = ({ onClick, tour, registerUser, loginUser }) => {
  return (
    <div className="login">
      <div className="u-center-text u-margin-bottom-xs">
        <h3 className="heading-tertiary">Summary</h3>
      </div>
      <div className="login__order-summary">
        <div className="login__order-summary__item">
          <p className="login__order-summary__item--constant">Tour: </p>
          <p className="login__order-summary__item--variable">{tour.title}</p>
        </div>

        <div className="login__order-summary__item">
          <p className="login__order-summary__item--constant">From : </p>
          <p className="login__order-summary__item--variable">
            {moment(tour.startDate).format("Do MMM YYYY")}
          </p>
        </div>

        <div className="login__order-summary__item">
          <p className="login__order-summary__item--constant">Until: </p>
          <p className="login__order-summary__item--variable">
            {moment(tour.endDate).format("Do MMM YYYY")}
          </p>
        </div>

        <div className="login__order-summary__item">
          <p className="login__order-summary__item--constant">Price: </p>
          <p className="login__order-summary__item--variable">
            £{tour.price}.00
          </p>
        </div>
      </div>
      <p className="login__info u-margin-bottom-sm">
        To book your tour, please sign in or register if you are a new customer
      </p>
      <div className="login__links ">
        <Link to="/signin" onClick={onClick} className="login__links__button">
          Sign in
        </Link>
        <Link to="/register" onClick={onClick} className="login__links__button">
          Register
        </Link>
        <button
          onClick={onClick}
          className="login__links__button login__links__button--back"
        >
          Back
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tour: state.tourData.selectedTour
});

export default connect(
  mapStateToProps,
  { registerUser, loginUser }
)(Summary);
