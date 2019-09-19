import React, { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import NavPortal from "./NavPortal";
import { logout } from "../actions/auth";

const Navigation = ({ isAuthenticated, logout }) => {
  const [visibilityToggle, setVisibilityToggle] = useState(false);

  const navClassName = () => {
    return visibilityToggle
      ? "navigation__list open"
      : "navigation__list close";
  };

  return (
    <div className="navigation">
      <button
        className="navigation__button"
        onClick={() => setVisibilityToggle(!visibilityToggle)}
      >
        <span className="navigation__button__icon">&nbsp;</span>
      </button>

      {visibilityToggle && (
        <NavPortal>
          <nav className={navClassName()}>
            <span
              className="navigation__list__close--button"
              onClick={() => setVisibilityToggle(!visibilityToggle)}
            >
              X
            </span>
            <Fragment>
              <NavLink
                className="navigation__list__item"
                onClick={() => setVisibilityToggle(!visibilityToggle)}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="navigation__list__item"
                onClick={() => setVisibilityToggle(!visibilityToggle)}
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="navigation__list__item"
                onClick={() => setVisibilityToggle(!visibilityToggle)}
                to="/tours"
              >
                Tours
              </NavLink>
              <NavLink
                className="navigation__list__item"
                onClick={() => setVisibilityToggle(!visibilityToggle)}
                to="/reviews"
              >
                Reviews
              </NavLink>
              <NavLink
                className="navigation__list__item"
                onClick={() => setVisibilityToggle(!visibilityToggle)}
                to="/events"
              >
                Events
              </NavLink>
              {isAuthenticated && (
                <NavLink
                  className="navigation__list__item"
                  onClick={() => {
                    setVisibilityToggle(!visibilityToggle);
                    logout();
                  }}
                  to="/"
                >
                  Logout
                </NavLink>
              )}
            </Fragment>
          </nav>
        </NavPortal>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);
