import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { fetchTour } from "../actions/tours";
import Dates from "./Dates";
import Modal from "./Modal";
import Summary from "./Summary";
import SummaryError from "./SummaryError";
import Slideshow from "./Slideshow";
import Loader from "./Loader";

const TourDetails = ({
  fetchTour,
  id,
  tour,
  startDate,
  endDate,
  loading,
  highlights
}) => {
  useEffect(() => {
    fetchTour(id);
  }, [fetchTour, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
  return (
    <Fragment>
      <header className="u-center-text u-margin-bottom-sm">
        <h2 className="heading-secondary">
          <span className="heading-secondary-text">{tour.title}</span>
        </h2>
      </header>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="tour-details">
            <div className="tour-details__gallery">
              <Slideshow tourCode={tour.tourCode} />
            </div>

            <div className="tour-details__list">
              {highlights &&
                highlights.map((item, index) => (
                  <div key={index} className="tour-details__list__item">
                    <img
                      src={item.icon}
                      className="tour-details__list__item--icon"
                      alt="icon"
                    ></img>
                    <p className="tour-details__list__item--content">
                      {item.text}
                    </p>
                  </div>
                ))}
            </div>

            <div className="tour-details__duration u-container">
              <h4 className="tour-details__duration__heading">
                This is a <span>{tour.duration}</span> day tour
              </h4>
              <p className="tour-details__duration__text">
                Please choose <span>either</span> the start date or end date for
                your tour below:{" "}
              </p>
              <div className="tour-details__duration__dates">
                <Dates duration={tour.duration - 1} id={id} />
              </div>
            </div>
            <div className="tour-details__book">
              <button
                className="tour-details__book__modal u-margin-bottom-md"
                onClick={toggleModal}
              >
                Book Now!
              </button>
              {showModal && (
                <Modal className="modal">
                  {window.scrollTo(0, 0)}
                  <div className="modal__background" onClick={toggleModal}>
                    <div
                      className="modal__content"
                      onClick={e => e.stopPropagation()}
                    >
                      {startDate.toString() === endDate.toString() ? (
                        <SummaryError onClick={toggleModal} />
                      ) : (
                        <Summary onClick={toggleModal} />
                      )}
                    </div>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  id: parseInt(ownProps.match.params.id),
  tour: state.tourData.selectedTour,
  startDate: state.tourData.selectedTour.startDate,
  endDate: state.tourData.selectedTour.endDate,
  loading: state.tourData.tours.loading,
  highlights: state.tourData.selectedTour.detailsPage
});

export default connect(
  mapStateToProps,
  { fetchTour }
)(TourDetails);
