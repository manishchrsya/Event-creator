import React, { useState } from "react";
import "./App.css";
import EventPage from "./components/EventSection/EventPage";
import UserLogin from "./components/loginSection/UserLogin";

function App() {
  const [loginStatus, setLoginStatus] = useState("");
  console.log("loginStatus", loginStatus);
  return (
    <div className="App">
      {loginStatus !== "200" ? (
        <EventPage />
      ) : (
        <UserLogin setLoginStatus={setLoginStatus} />
      )}
    </div>
  );
}

export default App;
