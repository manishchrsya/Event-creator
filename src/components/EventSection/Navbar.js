import React, { useState } from "react";
import AddEvent from "./AddEvent";
import "./Navbar.css";

const Navbar = (props) => {
  const [user] = useState("Manish");
  const { setToken } = props;

  const handleLogOut = () => {};

  return (
    <div className="nav">
      <div className="user-name">
        <ion-icon name="person-sharp"></ion-icon>
        <span>{user}</span>
      </div>
      <div className="nav-buttons">
        <div onClick={() => handleLogOut()} className="log-out">
          Log Out
        </div>
        <AddEvent />
      </div>
    </div>
  );
};

export default Navbar;
