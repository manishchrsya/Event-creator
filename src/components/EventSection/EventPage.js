import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import "./EventPage.css";

const EventPage = (props) => {
  const [eventList, setEventList] = useState([]);
  const { user } = props;
  const token = "Bearer" + " " + localStorage.getItem("token");

  useEffect(() => {
    getEventList();
  }, []);

  // get Api called to render the list of created events................

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
      <Navbar getEventList={getEventList} user={user} />
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
