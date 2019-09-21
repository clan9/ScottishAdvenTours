import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import validator from "validator";
import { registerUser } from "../actions/auth";

const Signup = ({ registerUser, history, isAuthenticated, serverErrorMsg }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [formError, setFormError] = useState("");

  const resetError = () => {
    setTimeout(() => {
      setFormError("");
    }, 6000);
  };

  document.body.style.overflow = "visible";

  const onSubmit = e => {
    e.preventDefault();

    if (!name || !email) {
      setFormError("Please provide a name, email address and password");
      resetError();
    } else if (!validator.isEmail(email)) {
      setFormError("Email address is not valid");
      resetError();
    } else if (password1 !== password2) {
      setFormError("Passwords do not match!");
      resetError();
    } else {
      setFormError("");
      registerUser(
        {
          name: name,
          email: email,
          password: password1
        },
        history,
        "/checkout"
      );
    }
  };

  return (
    <div className="u-container">
      <h2 className="form__heading u-center-text">Register your account</h2>
      <form className="form u-container" onSubmit={onSubmit}>
        <div className="form__error__container">
          {formError && <p className="form__error__msg">{formError}</p>}
          {serverErrorMsg && (
            <p className="form__error__msg">{serverErrorMsg}</p>
          )}
        </div>
        <input
          type="text"
          name="name"
          autoFocus
          autoComplete="off"
          placeholder="Enter user name"
          className="form__field"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          name="password1"
          minLength="6"
          placeholder="Enter password"
          className="form__field"
          value={password1}
          onChange={e => setPassword1(e.target.value)}
        />
        <input
          type="password"
          name="password1"
          minLength="6"
          placeholder="Confirm password"
          className="form__field"
          value={password2}
          onChange={e => setPassword2(e.target.value)}
        />
        <div className="form__button__container">
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  serverErrorMsg: PropTypes.string
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  serverErrorMsg: state.auth.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
