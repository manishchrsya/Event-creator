import React, { useState } from "react";
import "./App.css";
import EventPage from "./components/EventSection/EventPage";
import UserLogin from "./components/loginSection/UserLogin";

function App() {
  const [loginStatus, setLoginStatus] = useState(" ");
  const token = useState(localStorage.getItem("token"));

  // const logOut = () => setToken("");

  // const storeTokenInState = () => setToken(localStorage.getItem("token"));

  return (
    <div className="App">
      {token == "" ? (
        <UserLogin setLoginStatus={setLoginStatus} />
      ) : (
        <EventPage />
      )}
    </div>
  );
}

export default App;
