import React from "react";
import "./EventCard.css";
import EventImage from "../../Images/event.jpg";
import Moment from "moment";

const EventCard = (props) => {
  const { name, event_type, start, end, colorCode } = props;

  // converting the date format...........

  const extractDay = (date) => {
    return Moment(date).format("dddd");
  };

  const extractDate = (date) => {
    return Moment(date).format("MMM Do YY");
  };

  const extractTime = (date) => {
    return Moment(date).format("LT");
  };

  return (
    <div className="body">
      <div className="event-image">
        <img src={EventImage} />
      </div>
      <div className="event-details">
        <h3>{name}</h3>
        <p style={{ color: colorCode }} className="event-type">
          {event_type}
        </p>
        <div className="show-duration">
          <div>
            <span style={{ fontWeight: 500, color: "green", marginRight: 10 }}>
              Event date :-
            </span>
            <span className="start-date">
              {extractDay(start) + ",  " + extractDate(start)}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 500, color: "green", marginRight: 10 }}>
              Time slot :-
            </span>
            <span className="end-date">
              {extractTime(start) + " " + "To" + " " + extractTime(end)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
