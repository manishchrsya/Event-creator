import React from "react";
import "./EventCard.css";
import EventImage from "../../Images/event.jpg";
import Moment from "moment";

const EventCard = (props) => {
  const { name, event_type, start, end } = props;

  const eventDates = (date) => {
    return Moment(date).format("MMM Do YY");
  };

  return (
    <div className="body">
      <div className="event-image">
        <img src={EventImage} />
      </div>
      <div className="event-details">
        <h3>{name}</h3>
        <p className="event-type">{event_type}</p>
        <div className="show-duration">
          <div>
            <span style={{ fontWeight: 500, color: "green" }}>
              Start date:-
            </span>
            <span className="start-date">{eventDates(start)}</span>
          </div>
          <div>
            <span style={{ fontWeight: 500, color: "green" }}>End date:-</span>
            <span className="end-date">{eventDates(end)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
