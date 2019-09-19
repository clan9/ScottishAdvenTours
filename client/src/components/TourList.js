import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTours } from "../actions/tours";
import TourCard from "./TourCard";

const TourList = ({ tours, fetchTours }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTours();
  }, [fetchTours]);

  document.body.style.overflow = "visible";

  return (
    <div className="section-tours">
      <div className="u-container">
        <header className="u-center-text u-margin-bottom-md">
          <h2 className="heading-secondary">
            <span className="heading-secondary-text">Our Tours</span>
          </h2>
        </header>
        <div className="tours">
          {tours.map(tour => {
            return <TourCard key={tour.tourId} {...tour} />;
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tours: state.tourData.tours
});

export default connect(
  mapStateToProps,
  { fetchTours }
)(TourList);
