import React from "react";
import { Link } from "react-router-dom";

const TourCard = props => {
  const imageSrc = `url(img/tour${props.tourId}.jpg)`;
  const style = {
    backgroundImage: imageSrc
  };

  return (
    <div className="tour-card">
      <div className="tour-card__side  tour-card__side--front">
        <div className="tour-card__picture" style={style}>
          &nbsp;
        </div>
        <h4 className="tour-card__heading">{props.title}</h4>
        <div className="tour-card__details">
          <ul>
            <li>{props.duration} days</li>
            <li>{props.groupSize}</li>
            <li>{props.suitability}</li>
            <li>{props.guides}</li>
          </ul>
        </div>
      </div>
      <div className="tour-card__side tour-card__side--back">
        <div className="tour-card__cta">
          <div className="tour-card__price-box">
            <p className="tour-card__price-only">Only</p>
            <p className="tour-card__price-value">£{props.price}.00</p>
          </div>
          <Link
            className="tour-card__button"
            to={`/tourDetails/${props.tourId}`}
          >
            More Details!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
