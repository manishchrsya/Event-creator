import React, { useState } from "react";
import AddEvent from "./AddEvent";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useState("Manish");

  return (
    <div className="nav">
      <div className="user-name">
        <ion-icon name="person-sharp"></ion-icon>
        <span>{user}</span>
      </div>
      <AddEvent />
    </div>
  );
};

export default Navbar;
