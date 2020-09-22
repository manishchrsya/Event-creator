import React from "react";
import "./App.css";
import EventPage from "./components/EventSection/EventPage";
import UserLogin from "./components/loginSection/UserLogin";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div className="App">{token === null ? <UserLogin /> : <EventPage />}</div>
  );
}

export default App;
