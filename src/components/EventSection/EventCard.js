import React, { useState } from "react";
import "./EventCard.css";
import EventImage from "../../Images/event.jpg";

const EventCard = () => {
  return (
    <div className="body">
      <div className="event-image">
        {/* <img src={EventImage} width="280" height="170px" />
      </div>
      <div className="event-details">
        <h3>{eventName}</h3>
        <p>{eventType}</p>
        <div className="show-duration">
          <p>{start}</p>
          <p>{ends}</p>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
