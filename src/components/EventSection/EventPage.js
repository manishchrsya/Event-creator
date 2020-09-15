import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import "./EventPage.css";

const EventPage = () => {
  const [eventList, setEventList] = useState([]);

  const token = "Bearer" + " " + localStorage.getItem("token");

  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = () =>
    Axios.get("https://ik-react-task.herokuapp.com/events/", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        setEventList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <>
      <Navbar getEventList={getEventList} />
      <div className="event-data">
        {eventList.map((list) => (
          <EventCard
            name={list.name}
            event_type={list.event_type}
            start={list.start}
            end={list.end}
          />
        ))}
      </div>
    </>
  );
};

export default EventPage;
