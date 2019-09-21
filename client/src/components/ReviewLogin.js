import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import validator from "validator";
import { loginUser } from "../actions/auth";

const ReviewLogin = ({
  loginUser,
  history,
  isAuthenticated,
  serverErrorMsg
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const resetError = () => {
    setTimeout(() => {
      setFormError("");
    }, 6000);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("Please provide email address and password");
      resetError();
    } else if (!validator.isEmail(email)) {
      setFormError("Email address is not valid");
      resetError();
    } else {
      setFormError("");
      loginUser(
        {
          email: email,
          password: password
        },
        history,
        "/addReview"
      );
    }
  };

  return (
    <div className="">
      <h2 className="form__heading u-center-text">Sign in</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__error__container form__error__container--review ">
          {formError && <p className="form__error__msg">{formError}</p>}
          {serverErrorMsg && (
            <p className="form__error__msg">{serverErrorMsg}</p>
          )}
        </div>

        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email address"
          className="form__field"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          minLength="6"
          placeholder="Enter password"
          className="form__field"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="form__button__container">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

ReviewLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  serverError: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  serverErrorMsg: state.auth.error
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(ReviewLogin));
