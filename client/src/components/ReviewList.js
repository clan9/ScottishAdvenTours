import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllReviews } from "../actions/reviews";
import ReviewCard from "./ReviewCard";
import Modal from "./Modal";
import ReviewLogin from "./ReviewLogin";

const ReviewList = ({ reviews, isAuthenticated, fetchAllReviews, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllReviews();
  }, [fetchAllReviews]);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const onAddReview = () => {
    return isAuthenticated ? history.push("/addReview") : toggleModal();
  };

  return (
    <div className="u-container">
      <div className="page-heading u-center-text">
        <div className="heading-secondary">Our Tour Reviews</div>
      </div>
      <div className="reviews__actions">
        <div className="reviews__actions__add  u-margin-top-md">
          <p className="reviews__actions__add__text">
            Have you been on a tour? We'd love to hear from you!
          </p>
          <button
            className="reviews__actions__add__button btn"
            onClick={onAddReview}
          >
            Add a review
          </button>
        </div>
      </div>
      <div className="reviews__loginModal">
        {showModal && (
          <Modal className="modal">
            {window.scrollTo(0, 0)}
            <div className="modal__background" onClick={toggleModal}>
              <div
                className="modal__content"
                onClick={e => e.stopPropagation()}
              >
                <ReviewLogin />
              </div>
            </div>
          </Modal>
        )}
      </div>
      <div className="reviews__data">
        {reviews.map(review => (
          <ReviewCard key={review._id} {...review} />
        ))}
      </div>
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  fetchAllReviews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { fetchAllReviews }
)(ReviewList);
