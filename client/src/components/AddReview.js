import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addReview } from "../actions/reviews";
import ReviewForm from "./ReviewForm";
import Loader from "./ReviewLogin";

const AddReview = props => {
  const [tourTitle, setTourTitle] = useState("");

  const onSelectTour = e => {
    setTourTitle(e.target.innerText);
  };

  const onAddReview = ({ history, formData }) => {
    props.addReview(formData, history);
  };

  const renderContent = () => {
    return props.loading ? (
      <Loader />
    ) : (
      <div className="review__options">{renderOptions()}</div>
    );
  };

  const renderOptions = () => {
    return props.toursBooked && props.toursBooked.length > 0 ? (
      <Fragment>
        <div className="review__options__text__container">
          {props.error ? (
            <p className="addReview__error__msg">{props.error}</p>
          ) : (
            <p className="review__options__text">
              Please choose which one of your tours you want to post a review
              for...
            </p>
          )}
        </div>

        <div className="review__options__buttons">
          {props.toursBooked.map(tour => (
            <button
              className="review__options__buttons__button"
              key={tour.tourId}
              onClick={onSelectTour}
            >
              {tour.title}
            </button>
          ))}
        </div>
        <div className="review-form">
          <ReviewForm tourTitle={tourTitle} onSubmit={onAddReview} />
        </div>
      </Fragment>
    ) : (
      <p className="review__options__text--no-tours">
        Sorry, but you can only post a review once you have booked a tour with
        us
      </p>
    );
  };

  return (
    <div className="u-container">
      <div className="page-heading u-center-text">
        <div className="heading-secondary">Add a Review</div>
      </div>
      {renderContent()}
    </div>
  );
};

AddReview.propTypes = {
  addReview: PropTypes.func.isRequired,
  toursBooked: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  toursBooked: state.auth.user.toursBooked,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.reviews.error
});

export default connect(
  mapStateToProps,
  { addReview }
)(withRouter(AddReview));
