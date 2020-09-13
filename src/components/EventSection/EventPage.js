import Axios from "axios";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import EventCard from "./EventCard";

const EventPage = () => {
  const token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNTksInVzZXJuYW1lIjoiS21hbmlzaEBnbWFpbC5jb20iLCJleHAiOjE2MDA1Mzk3MDAsImVtYWlsIjoiS21hbmlzaEBnbWFpbC5jb20ifQ.IQmnjkHVkHkBpsk8T2MH26uM9Z_YEmCvWIVW5VMH2GQ";

  useEffect(() => {
    Axios.get("https://ik-react-task.herokuapp.com/events/", {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const apiCall = (obj) => {
    //app call
    //response
    // state: ek arr of obj
    // arr.push(obj)
    //localStorage.set('token', token)
    //const to = awat localStorage.get('token)
  };

  return (
    <>
      <Navbar />
      <EventCard />
    </>
  );
};

export default EventPage;
