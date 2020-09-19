import Axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";
import "./EventPage.css";
import Calendar from "react-calendar";

const EventPage = () => {
  const [eventList, setEventList] = useState([]);
  const token = "Bearer" + " " + localStorage.getItem("token");

  const colorCode = {
    Bootcamp: "#f56f42",
    Charity: "#f5d442",
    "Charitable auctions": "#f542e6",
    Exhibitions: "#69c265",
    Corporate: "#65c292",
    Family: "#000",
    Fundraising: "#781313",
    Holiday: "#4a86c2",
    "Music events": "#524ac2",
    "Networking events": "#904ac2",
    "Product launches": "#c24ac0",
    "Sports events": "#c24a80",
    "Sponsored runs": "#c24a4a",
    "Trade shows": "#171378",
  };

  // get Api called to render the list of created events................

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
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  const onChange = () => {};
  return (
    <>
      <Navbar getEventList={getEventList} />

      <div className="calender-wrapper">
        <Calendar
          className="calender-view"
          defaultView="month"
          onChange={onChange}
          tileContent={({ activeStartDate, date }) => {
            let one = new Date(date).toDateString();
            let totalEvets = [];
            for (let i = 0; i < eventList.length; ++i) {
              let e = eventList[i];
              let two = new Date(e.start).toDateString();
              if (one == two) {
                totalEvets.push(e);
                let moreEvents = eventList.filter((ee) => {
                  if (e.id != ee.id) {
                    let temp1 = new Date(ee.start).toDateString();
                    if (one == temp1) return ee;
                  }
                });
                totalEvets = [...totalEvets, ...moreEvents];
                console.log("totalEvents", totalEvets);
                return (
                  <div className="df">
                    {totalEvets.map((t) => (
                      <div
                        style={{ backgroundColor: colorCode[t.event_type] }}
                        className="dot"
                      ></div>
                    ))}
                  </div>
                );
              }
            }
          }}
        />
      </div>
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
