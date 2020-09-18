import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import "./EventPage.css";
import { Calendar } from "antd";
// import "react-calendar/dist/Calendar.css";
const EventPage = (props) => {
  const [eventList, setEventList] = useState([]);
  const [colorCode, setColorCode] = useState("");
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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  return (
    <>
      <Navbar setColorCode={setColorCode} getEventList={getEventList} />
      <Calendar
        fullscreen={false}
        style={{
          backgroundColor: "skyBlue",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          marginBottom: 50,
        }}
        activeStartDate={new Date()}
      />
      <div className="event-data">
        {eventList.map((list) => (
          <EventCard
            name={list.name}
            event_type={list.event_type}
            start={list.start}
            end={list.end}
            colorCode={colorCode}
          />
        ))}
      </div>
    </>
  );
};

export default EventPage;
