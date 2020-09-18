import React, { useState } from "react";
import "./App.css";
import EventPage from "./components/EventSection/EventPage";
import UserLogin from "./components/loginSection/UserLogin";

function App() {
  const [loginStatus, setLoginStatus] = useState(" ");

  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {token === null ? (
        <UserLogin setLoginStatus={setLoginStatus} />
      ) : (
        <EventPage />
      )}
    </div>
  );
}

export default App;
