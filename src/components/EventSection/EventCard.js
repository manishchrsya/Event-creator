import React from "react";
import "./EventCard.css";
import EventImage from "../../Images/event.jpg";
import Moment from "moment";

const EventCard = (props) => {
  const { name, event_type, start, end } = props;

  return (
    <div className="body">
      <div className="event-image">
        <img src={EventImage} />
      </div>
      <div className="event-details">
        <h3>{name}</h3>
        <p>{event_type}</p>
        <div className="show-duration">
          <p>{start}</p>
          <p>{end}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
