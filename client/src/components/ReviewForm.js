import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ReviewForm = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      history: props.history,
      formData: {
        tour: props.tourTitle,
        title,
        body
      }
    });
  };

  return (
    <form className="review-form" onSubmit={onSubmit}>
      <h4 className="review-form__tourTitle">
        Tour: <span>{props.tourTitle}</span>
      </h4>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="review-form__title"
        placeholder="Eye-catching headline here!"
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        className="review-form__body"
        placeholder="Enter your comments here"
      />
      <button className="review-form__button btn">Submit</button>
    </form>
  );
};

ReviewForm.propTypes = {
  tourTitle: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string
};

export default connect(null)(withRouter(ReviewForm));
