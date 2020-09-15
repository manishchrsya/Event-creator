import React, { useState } from "react";
import "./App.css";
import EventPage from "./components/EventSection/EventPage";
import UserLogin from "./components/loginSection/UserLogin";

function App() {
  const [loginStatus, setLoginStatus] = useState(" ");
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");

  return (
    <div className="App">
      {token === null ? (
        <UserLogin setLoginStatus={setLoginStatus} setUser={setUser} />
      ) : (
        <EventPage user={user} />
      )}
    </div>
  );
}

export default App;
