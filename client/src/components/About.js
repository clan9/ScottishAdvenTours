import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.body.style.overflow = "visible";

  return (
    <div className="section-about">
      <div className="u-container">
        <header className="u-center-text u-margin-bottom-md">
          <h2 className="heading-secondary">
            <span className="heading-secondary-text">
              Our tours are as varied
            </span>
            <span className="heading-secondary-text">as our weather!</span>
          </h2>
        </header>
        <div className="section-about__card section-about__card--1">
          <div className="section-about__card__text">
            <h3 className="heading-tertiary u-margin-bottom-xs u-center-text">
              From wilderness and adventure
            </h3>
            <p className="u-margin-bottom-xs">Stunning scenery and wildlife</p>
            <p className="u-margin-bottom-xs">
              Pristine hills and glens, beautiful islands
            </p>
            <p className="u-margin-bottom-xs">
              Activities for all ages and skill levels
            </p>
          </div>
        </div>
        <div className="section-about__card section-about__card--2 u-margin-top-sm">
          <div className="section-about__card__text">
            <h3 className="heading-tertiary u-margin-bottom-xs u-center-text">
              Through culture and history
            </h3>
            <p className="u-margin-bottom-xs">Enjoy world renowned festivals</p>
            <p className="u-margin-bottom-xs">
              Visit ancient monuments & castles
            </p>
            <p className="u-margin-bottom-xs">
              Tours tailored to your interests
            </p>
          </div>
        </div>
        <div className="section-about__card section-about__card--3 u-margin-top-sm u-margin-bottom-sm">
          <div className="section-about__card__text">
            <h3 className="heading-tertiary u-margin-bottom-xs u-center-text">
              To tranquility and luxury
            </h3>
            <p className="u-margin-bottom-xs">Set your own pace</p>
            <p className="u-margin-bottom-xs">
              Relax in unforgettable surroundings
            </p>
            <p className="u-margin-bottom-xs">
              Amongst friendly and welcoming people
            </p>
          </div>
        </div>
        <div className="section-about__button u-center-text">
          <Link to="/tours" className="button-link">
            Tours &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
