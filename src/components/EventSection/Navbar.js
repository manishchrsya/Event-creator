import React from "react";
import AddEvent from "./AddEvent";
import "./Navbar.css";

const Navbar = (props) => {
  const { getEventList, setColorCode } = props;
  // console.log("user", user);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  };

  return (
    <div className="nav">
      <div className="user-name">
        <ion-icon name="person-sharp"></ion-icon>
        <span>{localStorage.getItem("user")}</span>
      </div>
      <div className="nav-buttons">
        <div onClick={() => handleLogOut()} className="log-out">
          Log Out
        </div>
        <AddEvent setColorCode={setColorCode} getEventList={getEventList} />
      </div>
    </div>
  );
};

export default Navbar;
