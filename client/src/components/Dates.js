import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, subDays } from "date-fns";
import { connect } from "react-redux";
import { selectTourDates } from "../actions/tours";

const Dates = ({ duration, id, selectTourDates }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const setTourStartDate = date => {
    const calcEndDate = addDays(date, duration);
    setStartDate(date);
    setEndDate(calcEndDate);
    selectTourDates(id, date, calcEndDate);
  };

  const setTourEndDate = date => {
    const calcStartDate = subDays(date, duration);
    setStartDate(calcStartDate);
    setEndDate(date);
    selectTourDates(id, calcStartDate, date);
  };

  return (
    <div className="dates">
      <label>
        Start Date{""}
        <DatePicker
          className="dates__start"
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={date => setTourStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={addDays(startDate, duration)}
        />
      </label>
      <label>
        End Date{"    "}
        <DatePicker
          className="dates__end"
          dateFormat="dd/MM/yyyy"
          selected={endDate}
          onChange={date => setTourEndDate(date)}
          selectsEnd
          endDate={endDate}
          startDate={subDays(endDate, duration)}
        />
      </label>
    </div>
  );
};

export default connect(
  null,
  { selectTourDates }
)(Dates);
