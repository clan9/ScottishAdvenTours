import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewCard = props => {
  const { tour, title, body, date, name } = props;
  return (
    <div className="reviewCard">
      <div className="reviewCard__forTour">{tour}</div>
      <div className="reviewCard__reviewTitle">{title}</div>
      <div className="reviewCard__reviewBody">{body}</div>
      <div className="reviewCard__reviewFooter">
        Reviewed by: {name}, {moment(date).fromNow()}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  tour: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default ReviewCard;
