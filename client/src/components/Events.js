import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { connect } from "react-redux";
import { getEvents } from "../actions/events";

const Events = ({ getEvents, events, loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.body.style.overflow = "visible";

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const formatDateTime = date => {
    const prefix = moment(date).format("YYYY-MM-DDTHH:MM:SS");
    const suffix = "Z";
    return `${prefix}${suffix}`;
  };

  const startDateTime = formatDateTime(startDate);
  const endDateTime = formatDateTime(endDate);

  const onSubmit = e => {
    e.preventDefault();

    // call action
    getEvents(startDateTime, endDateTime);
  };

  return (
    <div className="u-container">
      <header className="u-center-text u-margin-bottom-sm">
        <h2 className="heading-secondary">
          <span className="heading-secondary-text">Events</span>
        </h2>
      </header>
      <div className="events">
        <h4 className="events__tagline u-margin-bottom-sm">
          Find out what else is happening while you're here...
        </h4>
        <form
          className="events__event-form u-margin-bottom-md"
          onSubmit={onSubmit}
        >
          <div className="events__event-form__dates">
            <div className="events__event-form__group">
              <label>Start Date</label>
              <DatePicker
                className="events__event-form__dates--start"
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
              />
            </div>
            <div className="events__event-form__group">
              <label>End Date </label>
              <DatePicker
                className="events__event-form__dates--end"
                dateFormat="dd/MM/yyyy"
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                endDate={endDate}
              />
            </div>
          </div>
          <div className="events__event-form__button">
            <button className="btn u-margin-top-sm">Find Events</button>
          </div>
        </form>
      </div>

      <section className="events__info">
        {!loading &&
          events.length > 0 &&
          events.map(event => {
            return (
              <div className="events__info__card" key={event.id}>
                <div className="events__info__card__img">
                  <img src={event.images[1].url} alt="event" />
                </div>
                <div className="events__info__card__title">{event.name}</div>
                <div className="events__info__card__date">
                  Date:{" "}
                  <span>
                    {moment(event.dates.start.localDate).format("DD MMM YYYY")}
                  </span>
                </div>

                <div className="events__info__card__venue">
                  {event._embedded.venues[0].name}
                </div>
                <div className="events__info__card__buy">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events__info__card__link"
                  >
                    Purchase a Ticket
                  </a>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  events: state.eventData.events,
  loading: state.eventData.loading
});

export default connect(
  mapStateToProps,
  { getEvents }
)(Events);
